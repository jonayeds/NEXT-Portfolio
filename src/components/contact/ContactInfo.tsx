import { BsTelephone } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"

export default function ContactInfo() {
  return (
    <div className="space-y-4 mt-8 font-body font-extralight opacity-90 tracking-wider">
      <a 
        href="https://maps.google.com/?q=Narayanganj,Dhaka" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 hover:opacity-75 transition-opacity"
      >
        <FaLocationArrow className="text-sm" />
        Narayanganj, Dhaka
      </a>
      
      <a 
        href="tel:+8801961391186"
        className="flex items-center gap-4 hover:opacity-75 transition-opacity"
      >
        <BsTelephone className="text-lg"/>
        +880 1961391186
      </a>
      
      <a 
        href="mailto:sajjadjonayed@gmail.com"
        className="flex items-center gap-4 hover:opacity-75 transition-opacity"
      >
        <MdOutlineMailOutline className="text-lg"/>
        sajjadjonayed@gmail.com
      </a>
    </div>
  );
} 