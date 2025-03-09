"use client"

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ContactLoader = () => {
    const tl = gsap.timeline();
  useGSAP(()=>{
    tl.to('.contact-loader', {
      height:0,
      bottom:0,
      duration:2.5,
      display:"none",
      ease:"power2.inOut"
    })
  })
  return (
    <div className="absolute w-screen h-screen bg-light z-30 contact-loader"></div>
  )
}

export default ContactLoader