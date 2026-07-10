import { useEffect, useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const updateByOne = () => setCounter(prev => prev + 1);

    return { counter, updateByOne }

}

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);

                }
                const jsonData = await res.json();

                setData(jsonData);
                setLoading(false)

            } catch (error) {

                if (error.name === "AbortError") return;
                setError(error.message);
            }
            finally {
                setLoading(false)
            }

        }

        fetchData();

        return () => controller.abort()

    }, [url])

    return { data, loading, error };

}


export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.error("localStorage error:", err);
    }
  };

  return [value, setStoredValue];
}