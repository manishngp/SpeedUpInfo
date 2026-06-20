

function Header({ name }) {
    return (
        <div className="h-20 w-full border-blue-300 bg-blue-100 border-2 flex items-center justify-between p-5"   >
            <h1 className="text-blue-500 text-5xl">
                My Name is {name}
            </h1>
            <div className=" w-[40%] flex items-center justify-evenly">
                <h3 className="text-2xl text-blue-400 cursor-pointer hover:text-gray-600">About</h3>
                <h3 className="text-2xl text-blue-400 cursor-pointer hover:text-gray-600">Projects</h3>
                <h3 className="text-2xl text-blue-400 cursor-pointer hover:text-gray-600">Contact me</h3>
            </div>
        </div>
    )
}

export default Header