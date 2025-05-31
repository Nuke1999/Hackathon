import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon, HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function MainNavigation({ className }: { className?: string }) {
  const [openMobileItems, setOpenMobileItems] = useState<string[]>([]);

  const toggleMobileItem = (item: string) => {
    setOpenMobileItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Desktop navigation items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Online Services", href: "/osp" },
    { label: "Forms", href: "/forms" },
    {
      label: "Motorists",
      href: "/motorists",
      children: [
        { label: "Information for Motorists", href: "/motorists" },
        {
          label: "Renew Driver License at DPS",
          href: "https://www.dps.texas.gov/section/driver-license",
          external: true,
        },
        {
          label: "Receiving In-Person Motor Vehicle Services",
          href: "/motorists/in-person-services",
        },
        {
          label: "Vehicle Titles",
          children: [
            {
              label: "Abandoned Vehicles",
              href: "/motorists/buying-or-selling-a-vehicle/abandoned-vehicles",
            },
            {
              label: "Add/Remove a Lien On a Vehicle",
              href: "/motorists/buying-or-selling-a-vehicle/addremove-a-lien-on-a-vehicle",
            },
            {
              label: "Assembled Vehicles",
              href: "/motorists/buying-or-selling-a-vehicle/assembled-vehicles",
            },
            {
              label: "Bonded Titles",
              href: "/motorists/buying-or-selling-a-vehicle/bonded-titles",
            },
            {
              label: "Dealer Information",
              href: "/motorists/buying-or-selling-a-vehicle/dealer-information",
            },
            {
              label: "Defective Titles",
              href: "/motorists/buying-or-selling-a-vehicle/defective-titles",
            },
            {
              label: "Duplicate Title",
              href: "/motorists/buying-or-selling-a-vehicle/get-a-copy-of-your-title",
            },
            {
              label: "Gifted Vehicles",
              href: "/motorists/buying-or-selling-a-vehicle/gifted-vehicles",
            },
            {
              label: "Heirship & Inherited Vehicles",
              href: "/motorists/buying-or-selling-a-vehicle/heirship-inherited-vehicles",
            },
            {
              label: "Inspections & Exemptions",
              href: "/motorists/register-your-vehicle/inspections-exemptions",
            },
            {
              label: "Lemon Law",
              href: "/motorists/consumer-protection/lemon-law",
            },
          ],
        },
        {
          label: "Disabled Parking, Plates & Placards",
          href: "/motorists/disabled-parking-placards-plates",
        },
        { label: "For Our Troops", href: "/motorists/for-our-troops" },
        {
          label: "Lemon Law",
          href: "/motorists/consumer-protection/lemon-law",
        },
      ],
    },
    {
      label: "Dealers",
      href: "/dealers",
      children: [
        {
          label: "Dealer Licensing",
          children: [
            {
              label: "Criminal History Review Process",
              href: "/dealers/criminal-history-review-process",
            },
            {
              label: "eLICENSING Resources",
              href: "/dealers/licensing/elicensing-resources",
            },
            { label: "Licensing", href: "/dealers/licensing" },
            {
              label: "Starting Your New Dealership",
              href: "/dealers/starting-your-new-dealership",
            },
          ],
        },
        {
          label: "Dealer License Lookup",
          href: "https://texasdmv.my.salesforce-sites.com/dealers",
          external: true,
        },
        {
          label: "Dealer License Plates",
          href: "/dealers/dealer-license-plates",
        },
        { label: "Lienholders", href: "/dealers/lienholders" },
        { label: "Temporary Tags", href: "/dealers/temporary-tags" },
        {
          label: "Transfer and Adjustments",
          href: "/dealers/transfer-and-adjustments",
        },
        { label: "Vehicle Titles", href: "/dealers/vehicle-titles" },
      ],
    },
    {
      label: "Motor Carriers",
      href: "/motor-carriers",
      children: [
        { label: "Compliance", href: "/motor-carriers/compliance" },
        {
          label: "International Registration Plan (IRP)",
          href: "/motor-carriers/international-registration-plan-irp",
        },
        {
          label: "Motor Carrier Forms",
          href: "/motor-carriers/motor-carrier-forms",
        },
        {
          label: "Motor Carrier General Information",
          href: "/motor-carriers/motor-carrier-general-information",
        },
        {
          label: "Operating Authority",
          href: "/motor-carriers/operating-authority",
        },
        {
          label: "Oversize/Overweight Permits",
          children: [
            {
              label: "Compliance",
              href: "/motor-carriers/oversize-overweight-permits/compliance",
            },
            {
              label: "Escort and Equipment Requirements",
              href: "/motor-carriers/oversize-overweight-permits/escort-and-equipment-requirements",
            },
            {
              label: "Holiday Hours & Movement Restrictions",
              href: "/motor-carriers/oversize-overweight-permits/holiday-movement-restrictions",
            },
            {
              label: "Oversize/Overweight Permits",
              href: "/motor-carriers/oversize-overweight-permits",
            },
          ],
        },
        {
          label: "Unified Carrier Registration (UCR)",
          href: "/motor-carriers/unified-carrier-registration-ucr",
        },
      ],
    },
    { label: "Boards & Committees", href: "/boards-committees" },
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "News", href: "/news" },
    { label: "Outreach", href: "/outreach" },
    { label: "FAQs", href: "/motorists/helpful-information/faqs" },
  ];

  return (
    <nav className={cn("bg-blue-900 text-white py-1", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blue-800 text-white">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            {child.children ? (
                              <div>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.href || "#"}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                                <ul className="ml-4 space-y-1 mt-1">
                                  {child.children.map((subChild) => (
                                    <li key={subChild.label}>
                                      <NavigationMenuLink asChild>
                                        <Link
                                          to={subChild.href}
                                          className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                          {subChild.label}
                                        </Link>
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <NavigationMenuLink asChild>
                                {child.external ? (
                                  <a
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                  </a>
                                ) : (
                                  <Link
                                    to={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                  </Link>
                                )}
                              </NavigationMenuLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <Link to={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className:
                            "bg-transparent hover:bg-blue-800 text-white",
                        })}
                      >
                        {item.label === "Home" ? (
                          <HomeIcon className="h-4 w-4" />
                        ) : (
                          item.label
                        )}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="text-white w-full flex justify-between items-center"
              >
                <span>Menu</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2 py-2">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-blue-800 last:border-0"
                  >
                    {item.children ? (
                      <Collapsible
                        open={openMobileItems.includes(item.label)}
                        onOpenChange={() => toggleMobileItem(item.label)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-white hover:bg-blue-800"
                          >
                            {item.label}
                            <ChevronRightIcon
                              className={cn(
                                "h-4 w-4 transition-transform",
                                openMobileItems.includes(item.label) &&
                                  "rotate-90"
                              )}
                            />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => (
                              <div key={child.label}>
                                {child.children ? (
                                  <Collapsible
                                    open={openMobileItems.includes(child.label)}
                                    onOpenChange={() =>
                                      toggleMobileItem(child.label)
                                    }
                                  >
                                    <CollapsibleTrigger asChild>
                                      <Button
                                        variant="ghost"
                                        className="w-full justify-between text-white hover:bg-blue-800 text-sm"
                                      >
                                        {child.label}
                                        <ChevronRightIcon
                                          className={cn(
                                            "h-3 w-3 transition-transform",
                                            openMobileItems.includes(
                                              child.label
                                            ) && "rotate-90"
                                          )}
                                        />
                                      </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                      <div className="pl-4 space-y-1">
                                        {child.children.map((subChild) => (
                                          <Link
                                            key={subChild.label}
                                            to={subChild.href}
                                            className="block py-2 px-4 text-sm hover:bg-blue-800 rounded"
                                          >
                                            {subChild.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </CollapsibleContent>
                                  </Collapsible>
                                ) : child.external ? (
                                  <a
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 px-4 text-sm hover:bg-blue-800 rounded"
                                  >
                                    {child.label}
                                  </a>
                                ) : (
                                  <Link
                                    to={child.href}
                                    className="block py-2 px-4 text-sm hover:bg-blue-800 rounded"
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-2 px-4 text-white hover:bg-blue-800 rounded"
                      >
                        {item.label === "Home" ? (
                          <span className="flex items-center">
                            <HomeIcon className="h-4 w-4 mr-2" /> Home
                          </span>
                        ) : (
                          item.label
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </nav>
  );
}
