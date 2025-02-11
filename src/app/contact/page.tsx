"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { BsTelephone } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import {  MdOutlineMailOutline } from "react-icons/md"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useRef } from 'react'

const ContactPage = () => {
  const tl = gsap.timeline();
  useGSAP(()=>{
    tl.to('.contact-loader', {
      height:0,
      bottom:0,
      duration:2.5,
      display:"none",
      ease:"power2.inOut"
    },'con')
    tl.from(".heading",{
      y:100,
      opacity:0,
      duration:0.5,
      delay:1.5
    },'con')
  })
  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e:any) => {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string, form.current as HTMLFormElement, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: 'Success',
            text: 'Message Sent',
            icon: 'success',  
            confirmButtonColor:"#1A1818",
            confirmButtonText: 'OK'
          })
          .then(result =>{
            if(result.isConfirmed){
                window.location.reload()
            }
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="  w-full min-h-screen bg-dark text-light">
      <div className="absolute w-screen h-screen bg-light z-30 contact-loader"></div>
      <div className="max-w-[80vw] min-h-screen flex items-center justify-center mx-auto pt-24 bg-dark">
       <div className="flex flex-col space-y-16 md:flex-row  justify-evenly items-start  relative w-full">
       <div className="lg:px-20 md:px-4 md:max-w-md lg:max-w-max">
         <div className=' overflow-hidden  '>
         <h1 className="text-9xl  font-heading text-center heading">Contact</h1>
         </div>
          <p className="font-body text-xl opacity-80 tracking-[3px] font-extralight text-center md:text-left">Fill in the form to start a conversation</p>
          <div className="space-y-4 mt-8 font-body font-extralight opacity-90 tracking-wider">
            <p className="flex items-center gap-4"><FaLocationArrow className="text-sm" />Narayanganj, Dhaka</p>
            <p className="flex items-center gap-4"><BsTelephone className="text-lg"/> +880 1961391186</p>
            <p className="flex items-center gap-4"><MdOutlineMailOutline className="text-lg"/>sajjadjonayed@gmail.com</p>

          </div>
          
        </div>
       
        <div className="md:border-l-2 h-full  w-full md:w-max md:pl-10 lg::ml-10 flex-1 ">
          <form ref={form} onSubmit={sendEmail} className="md:px-4 w-full">
            <div>
              <p className="font-body font-light tracking-[1px] text-lg">Name</p>
            <input required name="user_name" type="text" className="bg-light text-dark px-4 py-2 rounded-lg mt-2 outline-none w-full"  />
            </div>
            <div className="mt-6">
              <p className="font-body font-light tracking-[1px] text-lg">Email</p>
            <input required name="user_email" type="email" className="bg-light text-dark px-4 py-2 rounded-lg mt-2 outline-none w-full"  />
            </div>
            <div className="mt-6">
              <p className="font-body font-light tracking-[1px] text-lg">Your Message</p>
            <textarea required name='message'  className="bg-light text-dark px-4 py-2 rounded-lg mt-2 outline-none w-full  h-24"  />
            </div>
            <div className=' mt-4 pb-8 md:pb-0 flex justify-center'>
        <button type="submit" className='px-10 relative py-2 border-2 border-[#ece7e1]'><div className='absolute w-full text-center flex justify-center bg-dark h-full font-body font-light text-lg top-0 left-0 items-center  hover:tracking-[3px] duration-500 '>Submit</div>Submit</button>
      </div>
          </form>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ContactPage