"use server"

import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"



export const getUserByEmail = async(email:string | undefined| null)=> {
    const res= await fetch(`${process.env.SERVER_URL}/user/${email}`)
    const userInfo = await res.json()
    return userInfo
}

export const getCurrentUser = async() =>{
    // getting accessToken from cookies
    const accessToken = (await cookies()).get('accessToken')?.value
    let decodedData = null
    if(accessToken){
        // decoding access Token using jwt decode... 
        decodedData = await jwtDecode(accessToken) 
    }
    return decodedData
}