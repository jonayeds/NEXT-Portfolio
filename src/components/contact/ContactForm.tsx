/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useRef } from 'react'

const ContactForm = () => {
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
  )
}

export default ContactForm