import { useGetProjectByNameQuery } from "@/redux/api/baseApi"

export const GetProjectByName = (name:string)=>{
    const data = useGetProjectByNameQuery(name)
    return data
}