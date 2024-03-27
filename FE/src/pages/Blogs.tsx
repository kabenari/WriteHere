import { Appbar } from "@/components/Appbar"
import BlogCard from "@/components/BlogCard"

export const Blogs = () => {
  return (<div>
    <Appbar authorname="swarup"/>
    <div className="flex justify-center">
      <div className="max-w-xl">
      <BlogCard authorName ={"swarup"}
      authorId={"98797"} 
      content = {"hi this is form swarup the hitman"}
      publisheDate ={"23/10/2025"}
      title = {"a way from the future"}/>
      <br className=""/>
      <BlogCard authorName ={"swarup"}
      authorId={"98797"} 
      content = {"hi this is form swarup the hitman"}
      publisheDate ={"23/10/2025"}
      title = {"a way from the future"}/>
      <br className=""/>
      </div>
    </div>
    </div>
  )
}

