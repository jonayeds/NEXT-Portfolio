"use server"
import {RegisterForm} from '@/components/login/RegisterTab'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'


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
    let user = null
    if(userInfo?.success && userInfo?.accessToken){
        (await cookies()).set("accessToken", userInfo?.accessToken)
        user = await jwtDecode(userInfo?.accessToken) 
        return {...userInfo, user}
    }
    return userInfo
}