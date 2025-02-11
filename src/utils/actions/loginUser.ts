"use server"

import { FormValues } from "@/components/login/LoginTab"



export const loginUser = async(data:FormValues)=> {
    const res= await fetch(`${process.env.SERVER_URL}/login`,{
        headers:{
            "Content-Type" : "application/json",
        },
        method:"POST",
        cache:"no-store",
        body:JSON.stringify(data)

    })
    const userInfo = await res.json()
    return userInfo
}