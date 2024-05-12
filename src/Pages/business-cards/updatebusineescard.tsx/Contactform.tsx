
import Sidebar from "@/includes/BusineesCardSidebar";
import {
  Card,
  CardHeader,
  CardFooter, 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch"

import { Button } from '@/components/ui/button';
import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Link } from "react-router-dom";

export function Next() {
return (
  <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Top />
    <div className="flex flex-col">
            <Header />
                  <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
   

   <Sidebar />
   <Card className="w-full md:w-[300px] lg:w-[400px] xl:w-[750px] mx-auto">
  <CardHeader>
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  Contact / Enquiry Form
    </h3> <br/>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
    Hide Contact / Enquiry Form
    <br/><Switch id="airplane-mode" /><br/><br/>
    <div className="text-lg font-semibold">Contact/Enquiry Form Configuration</div>
  <p className="leading-7 [&:not(:first-child)]:mt-6">
  Want to receive email
  <Input type="email" placeholder="Email" />
    </p>
    </p>
    
    
   
      
    </CardHeader>
  
  
  
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Link to="/advancedsettings"><Button>Submit & Next</Button></Link>
  
  </CardFooter>
</Card>
</main></div></div>
)
}
export default Next