"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/utils/actions/loginUser";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import RegularButton from "../shared/RegularButton";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

export type FormValues = {
    email: string;
    password: string;
  };


const LoginTab = ({setLoginState}: {setLoginState:  Dispatch<SetStateAction<"login" | "register">>}) => {
    const handleLoginState = ()=>{
        setLoginState("register")
    }
    const handleGithubLogin = ()=>{
      
      signIn( "github",{
        callbackUrl:"https://next-portfolio-five-umber.vercel.app/"
      })
    }
    const {
        register,
        handleSubmit,
      } = useForm<FormValues>();
      const router = useRouter()
      const onSubmit = async (data: FormValues) => {
        const toastId = toast.loading("Logging in...")
       try {
        const result = await loginUser(data)
        console.log(result)
        if(result){
          toast.success("Successfully Logged in", {id:toastId})
          if(result){
            
          }
          router.push("/")
        }else if(!result){
          toast.error(`Incorrect email or password !!`, {id:toastId})
        }
       } catch (err:any) {
        console.error(err.message);
        throw new Error(err.message);
       } 
       
      };
  return (
    <div className="border-2 min-w-[30vw] border-[#1A1818] py-8 px-8 rounded-lg  border-opacity-80">
        <div className=" px-4">
            <h1 className="font-heading text-center lg:text-[5vw] text-[10vw] uppercase tracking-wider mb-8">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="emailLogin"
                type="email"
                {...register("email")}
                placeholder="Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none" 
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="passwordLogin"
                type="password"
                {...register("password")}
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none"
                required
              />
            </div>

            <div className="flex  justify-center">
             <RegularButton type="submit" text="Login"/>
            </div>
          </form>
          
        </div>
        <div className="flex items-center mt-4 justify-center">
            <p className="text-center  font-body font-light">Don`t have an account? </p>
            <Link href={"/register"} className="text-amber-700 cursor-pointer flex lg:hidden hover:underline ml-1">Register</Link>
            <span onClick={handleLoginState} className="text-amber-700 lg:flex hidden hover:underline ml-1 cursor-pointer">Register</span>
        </div>
          <div className="flex mt-4 items-center gap-2">
            <hr className="border-[1px] border-[#181818] flex-1 border-opacity-10"/>
            <p className="text-sm ">OR</p>
            <hr className="border-[1px] border-[#181818] flex-1 border-opacity-10"/>
          </div>
          <div>
            {/* <button onClick={()=>signIn( "google",{
              callbackUrl:"http://localhost:3000"
            })} className="w-full font-body border-[1px] border-[#181818] rounded-xl py-2 mt-4">Login with Google</button> */}
            <button
            onClick={handleGithubLogin}
            className="w-full border-[1px] font-body border-[#181818] rounded-xl py-2 mt-4">Login with Github</button>
          </div>
    </div>
  )
}

export default LoginTab