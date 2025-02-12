
const DashboardNavigation = ({role}:{role:string}) => {

  return (
    <div className="text-dark bg-white">
        {
            (role === "admin") && (
                <div>Admin</div>
            )
        }   
    </div>
  )
}

export default DashboardNavigation