import Link from "next/link";




const CustomButton = () => {
  return (
    <div className="border-[#1A1818] cursor-pointer group relative border-2 overflow-hidden rounded-md px-4 py-2"> 
      <Link 
        href={"/projects"} 
        className="relative group-hover:text-light duration-500 z-20"
      >
        My Projects
      </Link>
      <div className="w-2 h-2 rounded-full absolute left-1/2 -bottom-2 z-10 group-hover:scale-[20] duration-500 bg-dark"></div>
    </div>
  )
}

export default CustomButton