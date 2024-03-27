import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "@/config"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [PostInput, setPostInputs] = useState({
        email: "",
        password: ""
    })

    async function sendRequest(){
        try {
            const response =await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,PostInput)
            const jwt = response.data
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        } catch (error) {
            console.log(error);
            
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold">
                        Create An Account
                    </div>
                    <div className="text-slate-400">
                        {type === "signin" ? "Don't Have An Account" : "Already Have An Account"}
                        <Link className="pl-2 underline" to={type === "signin"?"/signup":"/signin"}>{type === "signin" ? "Sign Up" : "Sign In"}</Link>
                    </div>
                </div>
                <div>
                    <LabelledInput type="text" label="Email" placeholder="harirat@gmail.com" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value,
                        }))
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value,
                        }))
                    }} />
                    <button onClick={sendRequest} type="button" className="text-white rounded-lg w-full mt-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type == "signup" ? "Sign Up" : "Sign In"}
                    </button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm pt-4 font-medium text-gray-900 dark:text-white">{label}</label>
        <input type={type} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}