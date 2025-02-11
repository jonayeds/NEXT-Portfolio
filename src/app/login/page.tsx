"use client"
import LoginTab from "@/components/login/LoginTab"
import RegisterTab from "@/components/login/RegisterTab"

const LoginPage = () => {

  return (
    <div className="lg:px-36 px-4 gap-4 min-h-screen w-screen flex justify-center items-center">
        {/* login tab */}
        <div className=" relative">
            {/* <div className="absolute w-full h-full bg-light z-10"></div> */}
            <LoginTab/>
        </div>
        {/* register tab */}
        <div className="relative">
        {/* <div className="absolute w-full h-full bg-light z-10 "></div> */}
            <RegisterTab/>
        </div>
    </div>
  )
}

export default LoginPage