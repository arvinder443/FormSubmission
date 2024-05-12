import axios from "axios"
import { useState } from "react"
export default function Login(){

    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const handelForm=(e)=>{
        e.preventDefault()
        let data={
            email:email,
            password:password
        }
        axios.post("http://localhost:3000/admin/login",data).then((res)=>{
            if(res.data.success){
                sessionStorage.setItem("Token",res.data.token)
                console.log("Token",res.data.token)
                alert("login successful")
            }
            else{
                alert("incorrect email and password")
            }
        })
    }
    return(
        <>
            <form onSubmit={handelForm}>
                <lable>Email</lable>
                <input type="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}></input>

                <lable>Password</lable>
                <input type="password"value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}></input>

                <button>Submit</button>
            </form>
        </>
    )
}