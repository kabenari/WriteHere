import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react"
import axios from "axios"

export interface blogs {
    "id": string,
    "title": string,
    "content": string,
    "published": string,
    "authorId": string
}


export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<blogs>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blogs/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data);

            setBlog(response.data.blog);
            setLoading(false)
        })
    }, [id])

    return { loading, blog }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blogs[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blogs/all`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data);

            setBlogs(response.data.blog);
            setLoading(false)
        })
    }, [])

    return { loading, blogs }
}