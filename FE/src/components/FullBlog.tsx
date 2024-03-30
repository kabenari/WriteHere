import { blogs } from "@/hooks"
import { Appbar, Avatar } from "./Appbar"


export const FullBlog = ({ blog }: { blog: blogs }) => {
    return <div>
        <Appbar authorname="swarup" />
        <div className="grid grid-cols-12 px-10 pt-200 w-full">
            <div className="col-span-8">
                <div className="text-3xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-xl font-bold">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4 pt-10 ">
                <div className="flex gap-5">
                    <div className="w-full/2 pt-5">
                        <Avatar name="swarup" />
                    </div>
                    <div>
                        About The Author
                        <div className="text-xl font-bold">
                            Anonymous
                        </div>
                        <div className="pt-2 tetx-slate-500">
                            Ah i am good at writing both english and german ask me anything about the teach world
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}