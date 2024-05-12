import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card"
import Header from "@/includes/Header";
import Top from "@/includes/Top";
export function BusinessCreate() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Top />
      <div className="flex flex-col">
              <Header />
              <div className=" text-left p-4">
        <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
        <h5 className="text-2xl text-black-500 font-bold">Create new category</h5>
    </div>
        <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        
        <Card className="w-full md:w-[600px] lg:w-[800px] xl:w-[1150px] mx-auto">
  <CardHeader>
    
  </CardHeader>
  <CardContent>
    <form>
   
    <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
  <div className="lg:col-span-2 xl:col-span-2 grid grid-cols-2 gap-4">
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="picture">Thumbnail</Label>
      <Input id="picture" type="file" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Category Name</Label>
      <Input id="name" placeholder="category Name" />
    </div>
     </div>
  </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-end">
   <Button>Create</Button>
  </CardFooter>
</Card>
</main>

      </div>
      </div>
    
  );
}

export default BusinessCreate;
