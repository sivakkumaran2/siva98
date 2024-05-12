import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Link } from "react-router-dom";
  import Header from "@/includes/Header";
  import Top from "@/includes/Top";
  
  export function BusinessCreate() {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Top />
        <div className="flex flex-col">
          <Header />
  
          <h5 className="text-3xl text-left p-4 font-bold">Choose A Card Type</h5><br />
          <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Link to="/newbusinesscard" className="w-full">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Personal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src="https://img.freepik.com/free-vector/isometric-glass-effect-credit-card-template_23-2149108795.jpg?t=st=1715225870~exp=1715229470~hmac=d4ea1754bc7dc22bbd30ec96540360b948fb5cbafe216c993ba0598cbb8063d7&w=740" alt="Personal Card" className="w-full" />
                    </CardContent>
                  </Card>
                </Link>
  
                <Link to="/newbusinesscard" className="w-full">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Business</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src="https://img.freepik.com/free-vector/isometric-glass-effect-credit-card-template_23-2149108795.jpg?t=st=1715225870~exp=1715229470~hmac=d4ea1754bc7dc22bbd30ec96540360b948fb5cbafe216c993ba0598cbb8063d7&w=740" alt="Business Card" className="w-full" />
                    </CardContent>
                  </Card>
                </Link>
  
              </div>
            </div>
          </main>
  
  
        </div>
      </div>
    );
  }
  
  export default BusinessCreate;
  