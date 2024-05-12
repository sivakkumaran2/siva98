import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login.tsx";
import "./App.css";
import Forgot from "./Auth/Forgot.tsx";
import Signup from "./Auth/Signup.tsx";
import { Dashboard } from "@/Pages/Dashboard/Dashboard.tsx";
import { BusinessIndex } from "@/Pages/business-cards/Index.tsx";
import NewBusinessCreate from "@/Pages/business-cards/NewBusinessCreate.tsx"
import BusinessCreate from "@/Pages/business-cards/BusinessCreate.tsx";
import Whatapp from "@/Pages/whatsappstores/Whatapp.tsx"
import Media from "@/Pages/Media/Media.tsx"
import Transactions from "./Pages/Transactions/Transactions.tsx";
import Plans from "./Pages/plans/Plans.tsx";
import AdditionalTools from "./Pages/additionaltools/AdditionalTools.tsx";
import Next from "./Pages/business-cards/updatebusineescard.tsx/BasicDetails.tsx"
import Testimonials from "@/Pages/business-cards/updatebusineescard.tsx/Testimonials.tsx"
import Advancedsettings from"@/Pages/business-cards/updatebusineescard.tsx/Advancedsettings.tsx"
import Businesshours from"@/Pages/business-cards/updatebusineescard.tsx/Businesshours.tsx"
import Contactform from "@/Pages/business-cards/updatebusineescard.tsx/Contactform.tsx"
import Galleries from "@/Pages/business-cards/updatebusineescard.tsx/Galleries.tsx"
import  PaymentLinks  from "./Pages/business-cards/updatebusineescard.tsx/PaymentLinks.tsx";
import Products from "./Pages/business-cards/updatebusineescard.tsx/Products.tsx";
import Services from "./Pages/business-cards/updatebusineescard.tsx/Services.tsx";
import SocialLinks from "./Pages/business-cards/updatebusineescard.tsx/SocialLinks.tsx";
import Profileaccount from "./Pages/Profileaccount/Profileaccount.tsx";
import Edit from './Pages/Profileaccount/Edit.tsx';
import Changepassword from './Pages/Profileaccount/Changepassword.tsx';
import { ThemeProvider } from "@/components/ui/Themeprovider.tsx"
import Newstore from '@/Pages/whatsappstores/Newstore.tsx'
import Category from '@/Pages/whatsappstores/Category.tsx'
import Createcategories from '@/Pages/whatsappstores/Createcategories.tsx'
function App() {
  return (
    <Router>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business-cards" element={<BusinessIndex />} />
        
          <Route path="/create-business-card" element={<BusinessCreate />} />
          <Route path="/newbusinesscard" element={<NewBusinessCreate />} />
          <Route path="/next" element={<Next />} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/contactform" element={<Contactform/>} />
          <Route path="/advancedsettings" element={<Advancedsettings/>} />
          <Route path="/businesshours" element={<Businesshours/>} />
          <Route path="/paymentlinks" element={<PaymentLinks/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/sociallinks" element={<SocialLinks/>} />  
          <Route path="/whatsappstores" element={<Whatapp />} />
          <Route path="/media" element={<Media />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/additionaltools" element={<AdditionalTools />} />
          <Route path="/profile&account" element={<Profileaccount/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/changepassword" element={<Changepassword/>} />
          <Route path="/newstore" element={<Newstore/>} />
          <Route path="/category" element={<Category/>} />
   <Route path="/createcategories" element={<Createcategories/>}/>
        </Routes>
        </ThemeProvider>
    </Router>
  );
}

export default App;
