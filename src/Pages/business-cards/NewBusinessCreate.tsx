
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,

} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/includes/Header";
import Top from "@/includes/Top";
import { Link } from 'react-router-dom';
export function BusinessCreate() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Top />
      <div className="flex flex-col">
              <Header />
              <div className=" text-left p-4">
        <h5 className="text-1xl text-gray-500 font-bold">Overview</h5>
        <h5 className="text-2xl text-black-500 font-bold">Create New Business Card</h5>
    </div>
        <main className="grid flex-1 items-start text-left gap-4 p-4 my-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        
        <Card className="w-full md:w-[600px] lg:w-[800px] xl:w-[1150px] mx-auto">
  <CardHeader>
    
  </CardHeader>
  <CardContent>
    <form>
   
    <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-3">

  <div className="lg:col-span-1 xl:col-span-1">
    <img src="https://img.freepik.com/free-vector/isometric-glass-effect-credit-card-template_23-2149108795.jpg?t=st=1715225870~exp=1715229470~hmac=d4ea1754bc7dc22bbd30ec96540360b948fb5cbafe216c993ba0598cbb8063d7&w=740" alt="Your Image" className="w-full h-auto" />
    <br/>
    <Button className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600">Choose a theme</Button>
  </div>
  <div className="lg:col-span-2 xl:col-span-2 grid grid-cols-2 gap-4">
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="language">Language</Label>
      <Select>
        <SelectTrigger id="language">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Common Languages</SelectLabel>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asian Languages</SelectLabel>
            <SelectItem value="zh">Chinese</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="ko">Korean</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>European Languages</SelectLabel>
            <SelectItem value="it">Italian</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
            <SelectItem value="nl">Dutch</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
   
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Sub Title</Label>
      <Input id="name" placeholder="Location/Job title" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="password">Cover Video URL</Label>
      <Input id="password" type="password" placeholder="https://www.youtube.com Video ID" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="framework">Cover type</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="No Cover" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="next">YouTube Video - Autoplay</SelectItem>
          <SelectItem value="sveltekit">YouTube Video</SelectItem>
          <SelectItem value="astro">Vimeo Video</SelectItem>
          <SelectItem value="s">Vimeo Video - Autoplay</SelectItem>
          <SelectItem value="a">Photo</SelectItem>
          <SelectItem value="nuxt">No Cover</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="picture">Logo</Label>
      <Input id="picture" type="file" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Title</Label>
      <Input id="name" placeholder="Business Name/Your Name" />
    </div>
    <div className="grid w-full gap-1.5 col-span-2">
      <Label htmlFor="message">Description</Label>
      <Textarea placeholder="Type your message here." id="message" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
    <div className="items-top flex space-x-2 col-span-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  </div>
  
</div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
   <Link to="/next"> <Button>Submit & Next</Button> </Link>
  </CardFooter>
</Card>
</main>

      </div>
      </div>
    
  );
}

export default BusinessCreate;
