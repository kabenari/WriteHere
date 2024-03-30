import { Appbar } from "@/components/Appbar"
import BlogCard, { BlogCardNew } from "@/components/BlogCard"
import { useBlogs } from "@/hooks"

export const Blogs = () => {

  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>
      ....loading
    </div>
  }

  return (<div>
    <Appbar authorname="swarup" />
    <div className="flex justify-center">
      <div className="max-w-screen">
        {blogs.map(blogs => <BlogCardNew id={blogs.id} authorName={"swarup"}
          authorId={blogs.authorId}
          content={blogs.content}
          publisheDate={"23/10/2025"}
          title={blogs.title} />)}
      </div>
    </div>
  </div>
  )
}

