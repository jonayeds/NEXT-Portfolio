"use client"
import LoginTab from "@/components/login/LoginTab"
import RegisterTab from "@/components/login/RegisterTab"
import gsap from "gsap"
import { useEffect, useState } from "react"

const LoginPage = () => {
    const [loginState, setLoginState] = useState<"login" | "register">("login")
    useEffect(()=>{
        const tl = gsap.timeline()
            
        if(loginState == "login"){

            tl.to(".register",{
                width:"100%",
                duration:0.6
            })
            tl.to(".login",{
                width:0,
                duration:0.6
            })
        }else if(loginState === "register"){
            tl.to(".login",{
                width:"100%",
                duration:0.6
            })
            tl.to(".register",{
                width:0,
                duration:0.6
            })
        }
    },[loginState])

  return (
    <div className="lg:px-36 px-4 gap-4 min-h-screen w-screen flex justify-center items-center">
        {/* login tab */}
        <div className=" relative">
            <div className="absolute login w-full h-full bg-light z-10 left-0"></div>
            <LoginTab setLoginState={setLoginState}/>
        </div>
        {/* register tab */}
        <div className="relative hidden lg:block">
        <div className="absolute w-full register h-full bg-light z-10  right-0"></div>
            <RegisterTab setLoginState={setLoginState}/>
        </div>
    </div>
  )
}

export default LoginPage