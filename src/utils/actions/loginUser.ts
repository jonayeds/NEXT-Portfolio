"use server"

import { FormValues } from "@/components/login/LoginTab"
import { decodeAccessToken } from "../auth/decodeJWT"



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
    const user = decodeAccessToken(userInfo.accessToken)
    

    return {user, token: userInfo.accessToken, message:userInfo.message}
}