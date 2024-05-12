import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
export function Media() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <Top />
      <div className="flex flex-col">
        <Header />
        <div className="text-left p-4">
          <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
          <h5 className="text-2xl text-black-500 font-bold">Media Library</h5>
        </div>
        <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
         
          <Card className="w-full md:w-[150px] lg:w-[200px] xl:w-[375px] mx-auto ">
            <img src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?t=st=1715254179~exp=1715257779~hmac=0a1589676e79465e8cce9cb52b0c910640920b823a4eb4b2c2402e1b807b55cd&w=996"alt="Image" className="w-full h-48 object-cover" />
            <div className="p-4">
            <small className="text-sm font-medium leading-none">Image_-1-900x510.jpg</small>
            <br/>
              <small className="text-gray-500">Upload on: 25-04-2024 08:05 AM</small>
            </div>
          </Card>
        
          <Card className="w-full md:w-[150px] lg:w-[200px] xl:w-[375px] mx-auto ">
            <img src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?t=st=1715254179~exp=1715257779~hmac=0a1589676e79465e8cce9cb52b0c910640920b823a4eb4b2c2402e1b807b55cd&w=996"alt="Image" className="w-full h-48 object-cover" />
            <div className="p-4">
            <small className="text-sm font-medium leading-none">Image_-1-900x510.jpg</small>
            <br/>
              <small className="text-gray-500">Upload on: 25-04-2024 08:05 AM</small>
           </div>
          </Card>
          {/* Third Card */}
          <Card className="w-full md:w-[150px] lg:w-[200px] xl:w-[375px] mx-auto ">
            <img src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?t=st=1715254179~exp=1715257779~hmac=0a1589676e79465e8cce9cb52b0c910640920b823a4eb4b2c2402e1b807b55cd&w=996"alt="Image" className="w-full h-48 object-cover" />
            <div className="p-4">
            <small className="text-sm font-medium leading-none">Image_-1-900x510.jpg</small>
            <br/>
              <small className="text-gray-500">Upload on: 25-04-2024 08:05 AM</small>
         </div>
          </Card>
          {/* Fourth Card */}
          <Card className="w-full md:w-[150px] lg:w-[200px] xl:w-[375px] mx-auto ">
            <img src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?t=st=1715254179~exp=1715257779~hmac=0a1589676e79465e8cce9cb52b0c910640920b823a4eb4b2c2402e1b807b55cd&w=996" alt="Image" className="w-full h-48 object-cover" />
            <div className="p-4">
              <small className="text-sm font-medium leading-none">Image_-1-900x510.jpg</small>
              <br/>
              <small className="text-gray-500">Upload on: 25-04-2024 08:05 AM</small>
            </div>
          </Card>
          <Card className="w-full md:w-[150px] lg:w-[200px] xl:w-[375px] mx-auto ">
            <img src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?t=st=1715254179~exp=1715257779~hmac=0a1589676e79465e8cce9cb52b0c910640920b823a4eb4b2c2402e1b807b55cd&w=996" alt="Image" className="w-full h-48 object-cover " />
            <div className="p-4">
              <small className="text-sm font-medium leading-none">Image_-1-900x510.jpg</small>
              <br/>
              <small className="text-gray-500">Upload on: 25-04-2024 08:05 AM</small>
            </div>
          </Card>
          <Card className="w-full md:w-[150px] lg:w-[200px] xl:w-[375px] mx-auto">
            <img src="https://img.freepik.com/free-photo/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai_1258-150801.jpg?t=st=1715254179~exp=1715257779~hmac=0a1589676e79465e8cce9cb52b0c910640920b823a4eb4b2c2402e1b807b55cd&w=996"alt="Image" className="w-full h-48 object-cover" />
            <div className="p-4">
              <small className="text-sm font-medium leading-none">Image_-1-900x510.jpg</small>
              <br/>
              <small className="text-gray-500">Upload on: 25-04-2024 08:05 AM</small>
            </div>
          </Card>
          <div className="flex justify-end">
      <Pagination className="mr-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
        </main>
      </div>
    </div>
  );
}

export default Media;
