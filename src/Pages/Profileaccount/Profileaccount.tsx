import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
export function Profileaccount() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Top />
      <div className="flex flex-col">
        <Header />
        <div className="text-left p-4">
          <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
          <h5 className="text-2xl text-black-500 font-bold">My Account</h5>
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="w-full md:w-[300px] lg:w-[400px] xl:w-[1150px] mx-auto">
          <CardHeader>
          <div className="card-body p-4 text-center">
      <div className="d-flex flex-column align-items-center">
        <span className="img-rounded d-block">
          <img src="https://gobiz.nativecode.in/profile.png" alt="User" className="mx-auto" />
        </span>
        <h3 className=" mt-2 mb-1 text-xl">User</h3>
        <div className="mb-2 text-md">user@user.com</div>
        <div className="mt-3">
        <span style={{ backgroundColor:'#006400', color: 'white' }} className="px-3 py-1 rounded-lg text-sm">Customer</span>
       
        </div>
      </div>
    </div>
    </CardHeader>
    <hr className="my-6 border-t border-gray-300" />
    <CardContent>
      <div>
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="text-center">
         <Link to="/edit"><Button style={{ backgroundColor: '#0000FF', color: 'white' }} className="block">Edit</Button>
         </Link>   
        </div>
          <div className="flex justify-end">
     <Link to="/changepassword"><Button style={{ backgroundColor: '#0000FF', color: 'white' }} className="block">Change Password</Button>
     </Link>     
      </div>
        </div>
      </div>
    </CardContent>


            </Card>
            </div>
            </main>
      </div>
      </div>
  )
}
export default Profileaccount