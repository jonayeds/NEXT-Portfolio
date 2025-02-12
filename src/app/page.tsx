/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"
import CustomButton from '@/components/shared/CustomButton'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { loginUser } from '@/utils/actions/loginUser'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { setUser } from '@/redux/features/user.slice'


export default function Home() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch()
  const data = useAppSelector(state=> state.userLogin)
  useEffect(()=>{
    async function login() {
      if(session?.user && !data?.token){
        const loginReq = await loginUser({email:session.user.email as string, password:"abc"})
        console.log("main Plb", loginReq)
        localStorage.setItem("accessToken", loginReq.token)
        dispatch(setUser({userInfo:{
          email:session.user.email as string,
          role:loginReq.user?.role as "admin"|"user",
        },
        token:loginReq.token
      }))
      }
      
    }
    login()
  },[session])
  const tl  = gsap.timeline()
    useGSAP(()=>{
        tl
        .to('.loader', {
            width: 0,
            duration: 2.2,
            ease: "power2.inOut",
        })
        .to('.loading-animation1', {
            top: 0,
            height:0,
            duration: 1,
        },"anim")
        .to('.loading-animation2', {
            top: "100vh",
            height:0,
            duration: 1,

        },"anim")
        .to('.overlay', {
            display:"none",
            height:0,
            width:0,
            duration: 0,
        },)
        .from('.text-container',{
          x:"12vw",
          delay:-0.4,
          duration:1,
          ease: "power2.out",

        }, "text")
        .from('.text-animation', {
          width:0,
          marginLeft:"2vw",
          x:"-1vw",
            opacity:0,
            stagger:0.1,
            duration: 1,
        }, "text" )
        .to(".body-text",{
          top:0,
          duration:1,
          delay:-0.6,
        })

    })
  return (
    <div  className="bg-light min-h-screen relative">

      {/* home loader */}
        <div className=" absolute top-0 w-screen h-screen overflow-hidden z-50 overlay">
        <div className="absolute h-[50vh] loading-animation1 w-screen top-0 bg-dark"></div>
        <div className="absolute h-screen  w-screen flex justify-center items-center  ">
          <div className="loader z-50   md:h-[6px] h-[3px] bg-light lg:w-1/3 md:w-2/3  w-3/4 rounded-full "></div>
        </div>
        <div className="absolute loading-animation2 top-[50vh] h-[50vh] w-screen bg-dark"></div>
      </div>

      {/* home content */}
      <div className='h-screen flex justify-center flex-col  items-center  '>
        <h1  className='font-heading  tracking-widest uppercase  lg:text-[7vw] md:text-[10vw] text-[12vw] text-container relative  md:space-x-[3vw] text-dark font-semibold  space-x-[4vw]'>
          {
            ["Sajjad", "jonayed"].map((text,  index)=>(
              <span className='space-x-[0.5vw]' key={index}>
                {
                  text.split('').map((char, i)=>(
                    <span key={i} className={`inline-block  ${i>0 && 'text-animation '}`}>{char}</span>
                  ))
                }
              </span>
            ))
          }
        </h1>
        <div className=' z-20'>
          <p className=' lg:text-[2vw] md:text-[4vw] text-[5vw]   font-body uppercase  tracking-wider  font-light text-dark bg overflow-hidden flex justify-center'><span className='relative top-[6vh]  body-text '>fullstack web developer</span></p>
          <p className='lg:text-[1vw] text-[4vw]  md:text-[4vw]  mt-[0.8vh] text-center font-body uppercase font-light text-dark bg overflow-hidden lg:tracking-[0.7vw] md:tracking-[1.5vw] tracking-[2vw]'><span className='relative top-[6vh] body-text'>based in bangladesh</span></p>
          <div className='mx-auto w-max'>
          <CustomButton />
          </div>
        </div>
      </div>
    </div>
  );
}
