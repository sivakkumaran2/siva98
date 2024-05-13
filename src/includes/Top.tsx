import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Home, Package2, Users, Store, BadgeIndianRupee, Images, SquareGanttChart, PencilRuler } from "lucide-react";

export function Top() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleWhatsAppDropdown = () => {
    setIsWhatsAppOpen(!isWhatsAppOpen);
  };

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-1 bg-muted text-primary transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                Business Cards
                <ChevronDown className="h-4 w-4" />
              </button>
              {isOpen && (
                <div className="absolute z-10 top-full left-0 text-left mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/business-cards"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    All
                  </Link>
                  <Link
                    to="/create-business-card"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Create
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleWhatsAppDropdown}
                className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Store className="h-5 w-5" />
                WhatsApp Stores
                <ChevronDown className="h-4 w-4" />
              </button>
              {isWhatsAppOpen && (
                <div className="absolute z-10 top-full left-0 text-left mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/whatsappstores"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                   WhatsApp Stores
                  </Link>
                  <Link
                    to="/category"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                   Categories
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/media"
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary"
            >
              <Images className="h-4 w-4" />
              Media
            </Link>
            <Link
              to="/plans"
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary"
            >
              <SquareGanttChart className="h-4 w-4" />
              Plans
            </Link>
            <Link
              to="/transactions"
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary"
            >
              <BadgeIndianRupee className="h-4 w-4" />
              Transactions
            </Link>
            <Link
              to="/additionaltools"
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:text-primary"
            >
              <PencilRuler className="h-4 w-4" />
              Additional Tools
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Top;
