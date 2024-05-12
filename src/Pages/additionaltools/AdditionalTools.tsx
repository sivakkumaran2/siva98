import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientPicker } from "@/components/ui/GradientPicker";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

export function AdditionalTools() {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Top />
      <div className="flex flex-col">
        <Header />
        <div className="text-left p-4">
          <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
          <h5 className="text-2xl text-black-500 font-bold">QR Marker</h5>
        </div>
        <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <Card className="w-full md:w-[300px] lg:w-[500px] xl:w-[750px] mx-auto">
            <CardHeader></CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full">
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">QR Text</Label>
                      <Input id="name" placeholder="Input Placeholder" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="picture">Logo</Label>
                      <Input id="picture" type="file" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Logo Size</Label>
                      <Input id="name" placeholder="Extra Small" />
                    </div>
                  </div>
                  <div className="lg:col-span-2 xl:col-span-2 grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Text Color</Label>
                      <GradientPicker
                        background={textColor}
                        setBackground={setTextColor}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Background Color</Label>
                      <GradientPicker
                        background={backgroundColor}
                        setBackground={setBackgroundColor}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default AdditionalTools;
