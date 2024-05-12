import  { useState } from 'react';
import Sidebar from "@/includes/BusineesCardSidebar";
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardFooter, 
} from "@/components/ui/card"

import { Switch } from "@/components/ui/switch"
import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Button } from '@/components/ui/button';

const Next = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      Advanced Settings 
    </h3> <br/>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
    Disable Password Protection
    <br/><Switch id="airplane-mode" /><br/><br/>
    <div className="text-lg font-semibold">Set Password Protection</div>
  <p className="leading-7 [&:not(:first-child)]:mt-6">
    Password
    </p>
    </p>
    <div className="max-w-sm">
          <div className="relative">
         < Input type="Reviewer Name" placeholder="Password" 
          
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-0 end-0 p-3.5 rounded-e-md"
        >
          <svg className="flex-shrink-0 w-6 h-6 text-gray-400 dark:text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showPassword ? (
              <>
                <path fill="currentColor" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </>
            ) : (
              <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2" y1="2" x2="22" y2="22" />
              </>
            )}
          </svg>
        </button>
      </div>
    </div>
    <br/>
    <div className="text-lg font-semibold">Custom CSS / JS</div>
   
      <div className='row'>
      <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
  
          <div className='md-3'>
            <label className='form-label'>Custom CSS</label>
            <h5 className="font-sans">
  <Input className="h-40"type="Reviewer Name" placeholder="Custom CSS" /></h5>
          </div>
          <div className='md-3'>
  <label className='form-label'>Custom JavaScript</label>
  <div className="font-sans">
    <Input className="h-40" type="text" placeholder="Custom JavaScript" />
  </div>
</div>   
        </div>
      </div>
    </CardHeader>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
   <Button>Submit</Button>
  
  </CardFooter>
</Card>
</main></div></div>
)
}
export default Next