
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import{ArrowUp,RotateCcw,Check   } from "lucide-react";
import Header from "@/includes/Header";
import Top from "@/includes/Top";
export function Plans() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Top />
      <div className="flex flex-col">
        <Header />
        <div className=" text-left p-4">
        <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
        <h5 className="text-2xl text-black-500 font-bold">Plans</h5>
    </div>
    <header className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <Card className="w-full md:w-[300px] lg:w-[400px] xl:w-[750px] mx-auto">
      <CardHeader className="text-left">
        <CardTitle>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      My plan
    </h3>
        </CardTitle>
        <CardDescription >
        <p className="text-lg font-semibold">
        PROFESSIONAL 
    </p>   
        </CardDescription>
        <br></br>
        <CardDescription >
             Remaining Days: 314 Days
        </CardDescription>
      </CardHeader>  
      <CardFooter className="gap-3.5">
        <Button variant="outline"> < RotateCcw className="h-4 w-4" />Upgrade</Button>
        <Button>< ArrowUp className="h-4 w-4" />Renew</Button>
      </CardFooter>
    </Card>
    
    </header>
    <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <Card className="w-[350px]" >
      <CardHeader className="text-left">
      <h3 className="background-color: blue; color: white; padding: 10px; border-radius: 0;">
    VCARD & STORE
</h3>

      <CardTitle>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Beginner<br/> FREE  <p className="text-sm text-muted-foreground">Per Month</p>
  </h3>
  <div className="my-8">
  <hr className="flex-grow border-t border-gray-300"/>
</div>
<div className="my-8">
<p className="text-xl text-sm font-medium leading-none ">
    Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.
  </p>
</div>
<div className="my-8">
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-blue-800">
  vCard Features
  </h3>
</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> vCards</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Services</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Products</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> 
            Links
        </div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Payment Listed</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Galleries</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2"/> Testimonials</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Business Hours</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Contact Form</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Enquiries</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Password Protected</div>
<Button className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded-full text-lg font-semibold">Choose Plan</Button>

      </CardTitle>
      </CardHeader>
  </Card>
  <Card className="w-[350px]" >
      <CardHeader className="text-left">
      <h3 className="background-color: blue; color: white; padding: 10px; border-radius: 0;">
    VCARD & STORE
</h3>

      <CardTitle>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Intermediate <br/>₹22 
      <p className="text-sm text-muted-foreground">Per Month</p>
  </h3>
  <div className="my-8">
  <hr className="flex-grow border-t border-gray-300"/>
</div>
<div className="my-8">
  <p className="text-xl text-sm font-medium leading-none ">
    Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.
  </p>
  </div>
  <div className="my-8">
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-blue-800">
  vCard Features
  </h3>
 </div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> vCards</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Services</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Products</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> 
            Links
        </div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Payment Listed</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Galleries</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2"/> Testimonials</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Business Hours</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Contact Form</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Enquiries</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Password Protected</div>
<div className="my-4">
<Button className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded-full text-lg font-semibold">Choose Plan</Button>

           </div>
   </CardTitle>
      </CardHeader>
  </Card>
  <Card className="w-[350px]" >
      <CardHeader className="text-left">
      <h3 className="background-color: blue; color:white ; padding: 10px; border-radius: 0;">
    VCARD & STORE
</h3>
      <CardTitle>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Professional
      <br/>₹44
      <p className="text-sm text-muted-foreground">Per Month</p>
  </h3>
  
  <div className="my-8">
  <hr className="flex-grow border-t border-gray-300"/>
</div>
<div className="my-8">
<p className="text-xl text-sm font-medium leading-none ">
    Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.
  </p>
</div>
<div className="my-8">
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-blue-800">
  vCard Features
  </h3>
</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> vCards</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Services</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Products</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> 
            Links
        </div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Payment Listed</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Galleries</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2"/> Testimonials</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Business Hours</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Contact Form</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" /> Enquiries</div>
<div className="my-4 flex items-center text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />Password Protected</div><Button className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded-full text-lg font-semibold">Choose Plan</Button>
      </CardTitle>
      </CardHeader>
  </Card>
   </main>
    </div> 
        </div>
  )}
  export default Plans;