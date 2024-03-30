import { Appbar } from "@/components/Appbar"
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Publish() {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar authorname="swarup"/>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="mb-6 mt-10">
          <label
            className="block mb-2 text-sm font-medium text-black dark:text-green-500"
          >
            Title
          </label>
          <input
          onChange={(e)=>{
           setTitle(e.target.value)
          }
          }
          
            type="text"
            id="success"
            className="bg-slate-50 text-black  block w-[1000px] h-[40px] p-2.5 dark:bg-gray-700"
            placeholder="Your Title Here"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content
        </label>
        <textarea
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
          id="message"
          className="block p-2.5 w-[1000px] h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button onClick={async ()=>{
          const response = await axios.post(`https://backend.janugs.workers.dev/api/v1/blogs`,{
            title,content:description
          },{
            headers:{
              Authorization: localStorage.getItem('token')
            }
          })

          navigate(`/blogs/${response.data.id}`)

        }} type="button" className="mt-7 text-white bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish</button>
      </div>
    </div>
  );
}
