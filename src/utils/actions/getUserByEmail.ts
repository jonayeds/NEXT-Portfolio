"use server"



export const getUserByEmail = async(email:string | undefined| null)=> {
    const res= await fetch(`${process.env.SERVER_URL}/user/${email}`)
    const userInfo = await res.json()
    return userInfo
}