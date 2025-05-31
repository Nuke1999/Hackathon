import { Link } from "react-router-dom";
import { ExternalLinkIcon, ListIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DealerToolbox() {
  const toolboxLinks = [
    {
      title: "Motor Vehicle Dealers List",
      url: "https://txdmv.force.com/dealers/motorvehicledealerliststaging",
      icon: "🚗",
    },
    {
      title: "Motor Vehicle Manufacturers & Distributors List",
      url: "https://txdmv.force.com/dealers/motorvehiclemanufacturerstaging",
      icon: "🏭",
    },
    {
      title: "RV Manufacturers List",
      url: "https://txdmv.force.com/dealers/rvmanufacturerstaging",
      icon: "🚐",
    },
    {
      title: "Salvage Dealers List",
      url: "https://txdmv.force.com/dealers/salvagedealerstaging",
      icon: "🔧",
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader className="bg-purple-50 dark:bg-purple-950">
        <CardTitle className="text-xl text-purple-900 dark:text-purple-100 flex items-center gap-2">
          <ListIcon className="h-5 w-5" />
          Dealer Toolbox
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {toolboxLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <span className="text-2xl mr-3">{link.icon}</span>
                <span className="flex-1">{link.title}</span>
                <ExternalLinkIcon className="h-4 w-4 text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-900 flex justify-center">
        <Link
          to="/dealers/faq"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          View Dealer FAQ
        </Link>
      </CardFooter>
    </Card>
  );
}
