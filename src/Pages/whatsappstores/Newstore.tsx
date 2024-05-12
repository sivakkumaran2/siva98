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
import {
  Card,
  CardContent,
  CardHeader,
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
        <h5 className="text-2xl text-black-500 font-bold">Create New WhatsApp Store</h5>
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
     <Link to="/"><Button style={{ backgroundColor: '#0000FF', color: 'white' }} className="block">Choose a theme</Button>
         </Link>
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
      <Label htmlFor="password">Personalized Link</Label>
      <Input id="password" type="password" placeholder="Personalized Link" />
    </div>
   
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="picture">Logo</Label>
      <Input id="picture" type="file" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="picture">Banner</Label>
      <Input id="picture" type="file" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Store name</Label>
      <Input id="name" placeholder="Store name" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Store greeting</Label>
      <Input id="name" placeholder="Ex:Welcome to..." />
    </div>
    <div className="flex flex-col space-y-1.5">
  <Label htmlFor="currency">Currency</Label>
  <Select>
    <SelectTrigger id="currency">
      <SelectValue placeholder="Select a currency" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Major Currencies</SelectLabel>
        <SelectItem value="USD">US Dollar (USD)</SelectItem>
        <SelectItem value="EUR">Euro (EUR)</SelectItem>
        <SelectItem value="GBP">British Pound (GBP)</SelectItem>
        <SelectItem value="JPY">Japanese Yen (JPY)</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Other Currencies</SelectLabel>
        <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
        <SelectItem value="CAD">Canadian Dollar (CAD)</SelectItem>
        <SelectItem value="CHF">Swiss Franc (CHF)</SelectItem>
        <SelectItem value="CNY">Chinese Yuan (CNY)</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Emerging Market Currencies</SelectLabel>
        <SelectItem value="INR">Indian Rupee (INR)</SelectItem>
        <SelectItem value="BRL">Brazilian Real (BRL)</SelectItem>
        <SelectItem value="RUB">Russian Ruble (RUB)</SelectItem>
        <SelectItem value="ZAR">South African Rand (ZAR)</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>

    <div>
    <h5 className="font-sans">
   <label htmlFor="number-input">WhatsApp Number *</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Regular Price...." required />
</h5>
    </div>
    <div className="grid w-full gap-1.5 col-span-2">
      <Label htmlFor="message">WhatsApp Footer Text</Label>
      <Textarea placeholder=" Thanks for shopping with us..." id="message" />
    </div>
   
    </div>
  </div>
    </form><br/><br/>
    <div>
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="text-center">
           
        </div>
          <div className="flex justify-end">
     <Link to=""><Button style={{ backgroundColor: '#0000FF', color: 'white' }} className="block">Sumbit & Next</Button>
     </Link>     
      </div>
        </div>
      </div>
  </CardContent>
</Card>
</main>
      </div>
      </div>
  );
}

export default BusinessCreate;
