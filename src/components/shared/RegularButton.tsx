
const RegularButton = ({text}:{text:string}) => {
  return (
    <button   className='px-10  relative py-2 border-2 border-[#1a1a1a]'><div className='absolute w-full text-center flex justify-center bg-[#ece7e1] h-full font-body font-light text-lg top-0 left-0 items-center  hover:tracking-[3px] duration-700 '>{text}</div>{text}</button>
  )
}

export default RegularButton