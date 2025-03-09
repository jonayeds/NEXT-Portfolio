
import { BsTelephone } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import {  MdOutlineMailOutline } from "react-icons/md"

import ContactLoader from '@/components/contact/ContactLoader'
import ContactHeading from '@/components/contact/ContactHeading'
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  
  
  return (
    <div className="  w-full min-h-screen bg-dark text-light">
      {/* <div className="absolute w-screen h-screen bg-light z-30 contact-loader"></div> */}
      <ContactLoader/>
      <div className="max-w-[80vw] min-h-screen flex items-center justify-center mx-auto pt-24 bg-dark">
       <div className="flex flex-col space-y-16 md:flex-row  justify-evenly items-start  relative w-full">
       <div className="lg:px-20 md:px-4 md:max-w-md lg:max-w-max">
         <div className=' overflow-hidden  '>
         {/* <h1 className="text-9xl  font-heading text-center heading">Contact</h1> */}
         <ContactHeading/>
         </div>
          <p className="font-body text-xl opacity-80 tracking-[3px] font-extralight text-center md:text-left">Fill in the form to start a conversation</p>
          <div className="space-y-4 mt-8 font-body font-extralight opacity-90 tracking-wider">
            <p className="flex items-center gap-4"><FaLocationArrow className="text-sm" />Narayanganj, Dhaka</p>
            <p className="flex items-center gap-4"><BsTelephone className="text-lg"/> +880 1961391186</p>
            <p className="flex items-center gap-4"><MdOutlineMailOutline className="text-lg"/>sajjadjonayed@gmail.com</p>

          </div>
          
        </div>
       
        <div className="md:border-l-2 h-full  w-full md:w-max md:pl-10 lg::ml-10 flex-1 ">
          <ContactForm/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ContactPage