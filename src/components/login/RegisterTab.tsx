"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/utils/actions/loginUser";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import RegularButton from "../shared/RegularButton";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hook";
import { login } from "@/redux/features/loginState.slice";

export type RegisterForm = {
    email: string;
    password: string;
    name:string;
  };


const RegisterTab = () => {
     const dispatch = useAppDispatch()
        const handleLoginState = ()=>{
            dispatch(login())
        }
        
    const {
        register,
        handleSubmit,
        
      } = useForm<RegisterForm>();
      const router = useRouter()
      const route = usePathname()

      const onSubmit = async (data: RegisterForm) => {
       try {
        const result = await loginUser(data)
        console.log(result)
        if(result?.success){
          alert(result.message)
          localStorage.setItem("accessToken", result.accessToken)
          router.push("/")
        }
       } catch (err:any) {
        console.error(err.message);
        throw new Error(err.message);
       } 
       
      };
  return (
    <div className="border-2 border-[#1A1818] py-8 px-8 rounded-lg min-w-[30vw] border-opacity-80">
        <div className=" px-4">
            <h1 className="font-heading text-center lg:text-[5vw] text-[10vw] uppercase tracking-wider mb-8">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none" 
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
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
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm outline-none"
                required
              />
            </div>

            <div className="flex  justify-center">
             <RegularButton text="Register"/>
            </div>
          </form>
        </div>
        <div className="flex items-center mt-4 justify-center">
            <p className="text-center  font-body font-light">Already have an account? </p>
            <Link href={"/login"} className={`text-amber-700 flex ${route === "/login"? 'lg:hidden': ''}  hover:underline ml-1`}>Login</Link>
            <span onClick={handleLoginState} className={`text-amber-700 cursor-pointer ${route === '/login' ? 'lg:flex ': ''} hidden hover:underline ml-1`}>Login</span>
        </div>
    </div>
  )
}

export default RegisterTab