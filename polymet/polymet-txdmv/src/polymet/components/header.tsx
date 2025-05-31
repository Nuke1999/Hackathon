import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, GlobeIcon, MenuIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-blue-600 focus:text-white focus:z-50"
          >
            Skip to main content
          </a>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://d3eaozktcyljdh.cloudfront.net/themes/custom/txdmv/logo.svg"
                alt="Texas Department of Motor Vehicles Logo"
                className="h-12 md:h-16"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* How Do I? Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  How Do I?
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/motorists/consumer-protection/lemon-law">
                    File a Lemon Law Complaint?
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/motorists/consumer-protection/dont-make-a-move">
                    Find the Right Mover for Me?
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/motorists/buying-or-selling-a-vehicle/get-a-copy-of-your-title">
                    Get a Copy of My Title?
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://webdealer.txdmv.gov/title/publicVehicleTransfer">
                    Notify The TxDMV That I Sold My Vehicle?
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/motorists/register-your-vehicle">
                    Register My Vehicle with the TxDMV?
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/motorists/license-plates">
                    Transfer my license plates?
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <GlobeIcon className="h-4 w-4" />
                  Language
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 max-h-80 overflow-y-auto"
              >
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>Chinese (Simplified)</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>German</DropdownMenuItem>
                <DropdownMenuItem>Japanese</DropdownMenuItem>
                <DropdownMenuItem>Korean</DropdownMenuItem>
                <DropdownMenuItem>Vietnamese</DropdownMenuItem>
                {/* Additional languages would be here */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="flex items-center">
              <div className="relative">
                <Input
                  type="search"
                  name="s"
                  placeholder="Search for..."
                  className="w-40 lg:w-64 pr-8"
                />

                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  aria-label="Click to submit your search"
                >
                  <SearchIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
