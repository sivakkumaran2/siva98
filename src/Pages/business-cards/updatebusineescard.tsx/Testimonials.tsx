
import Sidebar from "@/includes/BusineesCardSidebar";
import {
  Card,
  CardHeader,
  CardFooter, 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";

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
  Testimonials <br/><br/>
    </h3> 
    <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
    <h5 className="font-sans">
  Reviewer Image
  <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="picture"></label>
      <Input id="picture" type="file" />
    </div>
    </h5>
    <h5 className="font-sans">
  Reviewer Name
  <Input type="Reviewer Name" placeholder="Reviewer Name" />
    </h5>
<h5 className="font-sans">
  Reviewer Subtext
  <Input type="Reviewer Name" placeholder="  Reviewer Subtext" />
    </h5>

<h5 className="font-sans">
  Review
  <Input type="Reviewer Name" placeholder="Review" />
    </h5>
</div>
<div className="flex justify-end">
  <Button variant="destructive" className="w-20">Remove</Button>
</div>
<button className="bg-blue-500 hover:bg-blue-700 text-white w-20 font-bold py-2 px-4 border border-blue-700 rounded">
  Add
</button>
    </CardHeader>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Link to="/businesshours"><Button>Submit & Next</Button></Link>
  
  </CardFooter>
</Card>
</main></div></div>
)
}
export default Next