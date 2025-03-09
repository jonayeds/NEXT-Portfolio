"use server"

import { FormValues } from "@/components/login/LoginTab"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"



export const loginUser = async(data:FormValues)=> {
    try {
        const res= await fetch(`${process.env.SERVER_URL}/login`,{
            headers:{
                "Content-Type" : "application/json",
            },
            method:"POST",
            cache:"no-store",
            body:JSON.stringify(data)
    
        })
        const userInfo = await res.json()
        let user = null
        if(userInfo?.success){
            (await cookies()).set("accessToken", userInfo?.accessToken)
            user = await jwtDecode(userInfo?.accessToken) 
            return {user, accessToken: userInfo.accessToken}
        }
        return null
    } catch (error) {
        console.log(error)
    }
}

export const logout = async()=>{
    (await cookies()).delete("accessToken")
}

