export const Appbar = ({authorname}:{authorname:string})=>{
    return <div className="border-b flex justify-between px-10 py-3">
        <div className="font-bold flex items-center justify-center">
            WriteHere
        </div>
        <div>
            <Avatar  name={authorname}/>
        </div>
    </div>
}


function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300 flex items-center justify-center">{name[0]}</span>
    </div>
}