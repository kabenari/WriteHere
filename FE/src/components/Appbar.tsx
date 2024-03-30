import { Link } from "react-router-dom"

export const Appbar = ({ authorname }: { authorname: string }) => {
    return <div className="border-b flex justify-between px-10 py-3">
        <Link to={"/blogs"}>
            <div className="font-bold flex items-center justify-center">
                WriteHere
            </div></Link>
        <div className="flex flex-row gap-2">
            <Link to="/publish"><button type="button" className="text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish</button></Link>
            <Avatar name={authorname} />
        </div>
    </div>
}


export function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300 flex items-center justify-center">{name[0]}</span>
    </div>
}