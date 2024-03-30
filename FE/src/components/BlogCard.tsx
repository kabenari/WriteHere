import { Link } from "react-router-dom"

interface BlogCardinputs {
    id: string
    authorName: string
    title: string,
    content: string,
    authorId: string,
    publisheDate: string
}

export default function BlogCard({ authorName, authorId, content, publisheDate, title, id }: BlogCardinputs) {
    return (<Link to={`/blogs/${id}`}>
        <div>
            <div className="flex w-full mt-5">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>
                <div className="font-extrathin pl-2 flex justify-center items-center">
                    {authorName}
                </div>
                <div className="font-thin pl-2 font-slate-200 flex items-center">
                    . {publisheDate}
                </div>
            </div>
            <div>
                {title}
            </div>
            <div>
                {content.slice(0, 100) + "...."}
            </div>
            <div>
                {2 + "mins"}
            </div>
            <div className="h-[0.5px] w-full bg-black"></div>
        </div>
    </Link>
    )
}



export function BlogCardNew({ authorName, authorId, content, publisheDate, title, id }: BlogCardinputs) {
    return <div>
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 w-[32rem]">
                <header className="flex font-light text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90 -ml-2" viewBox="0 0 24 24" stroke="#b91c1c">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                    <p>{title}</p>
                </header>


                <h2 className="font-bold text-3xl mt-2">
                    {title}
                </h2>

                <p className="mt-5">
                    By:
                    <a href="#" className="text-red-600"> {authorId} </a>,
                    <a href="#" className="text-red-600"> {id} </a>
                </p>

                <h3 className="font-bold text-xl mt-8"> Intro </h3>
                <p className="font-light">{content.slice(0,30)}</p>

                <button className="bg-red-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
                <Link to={`/blogs/${id}`}><p> READ MORE </p></Link>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>

        </div>
    </div>
}



function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}