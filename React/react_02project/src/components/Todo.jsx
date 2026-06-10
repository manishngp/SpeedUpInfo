 export function TodoItem({ id, text, onDelete }) {
    // console.log(text);
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

