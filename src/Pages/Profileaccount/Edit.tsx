import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Link } from "react-router-dom";
export function Profileaccount() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Top />
      <div className="flex flex-col">
        <Header />
        <div className="text-left p-4">
          <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
          <h5 className="text-2xl text-black-500 font-bold">Account Details</h5>
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="w-full md:w-[300px] lg:w-[400px] xl:w-[1150px] mx-auto">
          <CardHeader>

    <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
    <h5 className="font-sans text-left">
    Profile Picture
  <div className="grid w-full max-w-sm items-left">
      <Label htmlFor="picture"></Label>
      <Input id="picture" type="file" />
      
 </div>
 </h5>
    <div className="grid w-full max-w-sm items-left">
    <h5 className="font-sans text-left">
         Name
  <Input type="Reviewer Name" placeholder="User Name" /></h5>
  </div>
</div>
<div className="grid w-full max-w-sm items-left">
<h5 className="font-sans text-left">
         E-Mail
  <Input type="mail-id" placeholder="Email id" /></h5>
  </div>
    </CardHeader>
    <hr className="my-6 border-t border-gray-300" />
    <CardContent>
      <div>
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="text-center">
         <Link to="/profile&account"><Button style={{ backgroundColor: '#0000FF', color: 'white' }} className="block">Update</Button>
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