"use server"

export const getProjectByName = async(name:string)=> {
    const res= await fetch(`${process.env.SERVER_URL}/projects/${name}`)
    const userInfo = await res.json()
    return userInfo
}

export const getAllProjects = async()=>{
    const res= await fetch(`${process.env.SERVER_URL}/projects`)
    const userInfo = await res.json()
    return userInfo
}
