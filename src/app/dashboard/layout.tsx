import DashboardNavigation from "@/components/shared/DashboardNavigation"


const DashboardLayout = async({children}:{children: React.ReactNode}) => {
    
  return (
    <div className="lg:px-36 pt-28 px-4 gap-4 min-h-screen  ">
        <div> 
        <h1 className="font-heading md:text-[5vw] text-[10vw]  text-center uppercase tracking-wider">Dashboad</h1>
        </div> 
        <div className="flex justify-start gap-2 mt-8">
            <div className="bg-dark min-w-[25vw] min-h-screen rounded-xl">
                <DashboardNavigation  />
            </div>
            <div className="  min-w-[30vw] w-full min-h-screen">
            {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout