import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
        
<div className={cn("pb-12", )}>
<div className="space-y-4 py-4">
<div className="px-4 py-2">
  <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
  UPDATE BUSINESS CARD
  </h2>
 
  <div className="space-y-1">
  <Link to="/next">           <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >

              Basic Details
            </Button>
            </Link>
 
            <Link to ="/sociallinks">           
            <Button variant="ghost" size="sm" className="w-full justify-start"> 
              Social Links
            </Button>
            </Link>
 <Link to="/paymentlinks">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Payment Links
            </Button>
            </Link>
            <Link to="/services">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Services
            </Button>
            </Link>
            <Link to="/products">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Products
            </Button>
            </Link>
            <Link to="/galleries">           
            <Button variant="ghost" size="sm" className="w-full justify-start">
             Galleries
            </Button>
            </Link>
            <Link to="/testimonials">  
            <Button variant="ghost" size="sm" className="w-full justify-start">
             Testimonials
            </Button>
            </Link>
            <Link to="/businesshours">  
            <Button variant="ghost" size="sm" className="w-full justify-start">
            Business Hours
            </Button>
            </Link>
            <Link to="/contactform">  
            <Button variant="ghost" size="sm" className="w-full justify-start">
             Contact Form
            </Button>
            </Link>
            <Link to="/advancedsettings">  
            <Button variant="ghost" size="sm" className="w-full justify-start">
            Advanced Settings
            </Button>
            </Link>
  </div>
</div>

</div>
</div>

  )
}
export default Sidebar