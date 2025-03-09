"use client"

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ContactHeading = () => {
    const tl = gsap.timeline();
  useGSAP(()=>{
    tl.from(".heading",{
      y:100,
      opacity:0,
      duration:0.5,
      delay:2.5
    },)
  })
  return (
    <h1 className="text-9xl  font-heading text-center heading">Contact</h1>
  )
}

export default ContactHeading