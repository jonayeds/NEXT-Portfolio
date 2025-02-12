"use server"
import {RegisterForm} from '@/components/login/RegisterTab'


export const registerUser =async (data:RegisterForm)=>{
    const res = await fetch(`${process.env.SERVER_URL}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        cache:"no-store"
    })
    const userInfo = await res.json()
    return userInfo
}