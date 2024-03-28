import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react"
import axios from "axios"

interface blogs {
    "id": string,
    "title": string,
    "content": string,
    "published": string,
    "authorId": string
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blogs[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blogs/bulk`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).then(response => {
            setBlogs(response.data.blogs);
            setLoading(false)
        })
    }, [])

    return {loading , blogs}
}