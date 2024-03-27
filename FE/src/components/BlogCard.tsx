interface BlogCardinputs {
    authorName: string
    title: string,
    content: string,
    authorId: string,
    publisheDate: string
}

export default function BlogCard({ authorName, authorId, content, publisheDate, title }: BlogCardinputs) {
    return (
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
    )
}



function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}