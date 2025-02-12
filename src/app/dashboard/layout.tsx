import DashboardNavigation from "@/components/shared/DashboardNavigation"
import { getUserByEmail } from "@/utils/actions/getUserByEmail"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"

const DashboardLayout = async({children}:{children: React.ReactNode}) => {
    const session = await getServerSession(authOptions)
        const user = session?.user
        const currentUser = await getUserByEmail(user?.email)
        console.log(currentUser)
  return (
    <div className="lg:px-36 pt-28 px-4 gap-4 min-h-screen  ">
        <div> 
        <h1 className="font-heading md:text-[5vw] text-[10vw]  text-center uppercase tracking-wider">Dashboad</h1>
        <p className="text-center font-body md:text-lg text-sm">Welcome {user?.name}</p>
        </div> 
        <div className="flex justify-start gap-2 mt-8">
            <div className="bg-dark min-w-[25vw] min-h-screen rounded-xl">
                <DashboardNavigation role={currentUser.role}  />
            </div>
            <div className="  min-w-[30vw] w-full min-h-screen">
            {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout