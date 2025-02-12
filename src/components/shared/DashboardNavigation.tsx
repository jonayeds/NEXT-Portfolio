"use client"

import { useAppSelector } from "@/redux/hook"
import Link from "next/link"

const DashboardNavigation = () => {
    const user = useAppSelector((state)=>state.userLogin)
    
  return (
    <div className="text-light flex justify-center">
        <div className="mt-8 flex justify-start  min-w-[70%]">
        {
            (user.userInfo?.role === "admin") && (
                <Link href={"/dashboard/add-project"} className="hover:tracking-widest duration-500 font-body" >Add Project</Link>
            )
        }  
        {
            (user.userInfo?.role === "user") && (<div className="flex flex-col gap-4">

                <Link href={"/dashboard/my-blogs"} className="hover:tracking-widest duration-500 font-body">My Blogs</Link>
                <Link href={"/dashboard/my-blogs"} className="hover:tracking-widest duration-500 font-body">Upload Blog</Link>
            </div>
            )
        }  
        </div> 
    </div>
  )
}

export default DashboardNavigation