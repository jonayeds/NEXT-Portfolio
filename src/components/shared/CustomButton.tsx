"use client"
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@/redux/hook";
const CustomButton = () => {
  const tl = gsap.timeline();
  const tl1 = gsap.timeline();
    const currentUser = useAppSelector((state)=>state.userLogin)
    const {userInfo} = currentUser
    

  useGSAP(() => {
    tl1.from(".btn-tran", {
      width: 0,
      delay: 5.5,
      duration: 0.5,
    });
    tl.to(
      ".button-ani",
      {
        display: "block",
        scale: 20,
        duration: 0.5,
      },
      "btn"
    );
    tl.to(
      ".btn-text-ani",
      {
        color: "#ECE7E1",
        duration: 0.5,
      },
      "btn"
    );
  });
  tl.pause();
  const buttonEnter = () => {
    tl.play();
  };
  const buttonLeave = () => {
    tl.reverse();
  };
  return (
    <Link
      href={userInfo? "/dashboard" : "/projects" }
      className="btn-tran  block overflow-hidden mx-auto"
    >
      <button
        className="mx-auto w-max mt-5 font-body border-2 border-[#1a1818] px-4 py-2 rounded-lg font-light cursor-pointer text-[#1a1818] relative overflow-hidden btn-text-ani  "
        onMouseLeave={buttonLeave}
        onMouseEnter={buttonEnter}
      >
        {" "}
        {userInfo? "Dashboad" : "My Projects" }{" "}
        <div className="absolute hidden w-2 h-2  rounded-full button-ani bg-black bottom-0 left-[50%] -z-10"></div>
      </button>
    </Link>
  );
};

export default CustomButton;
