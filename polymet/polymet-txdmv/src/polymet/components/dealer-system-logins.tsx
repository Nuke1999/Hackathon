import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DealerSystemLogins() {
  const systemLogins = [
    {
      name: "webDEALER",
      description: "Title, registration & temporary tag system",
      url: "https://webdealer.txdmv.gov/",
      icon: "🚗",
    },
    {
      name: "eLICENSING",
      description: "Dealer & motor carrier licensing system",
      url: "https://licensing.txdmv.gov/",
      icon: "🔑",
    },
    {
      name: "eTAG",
      description: "Legacy temporary tag system",
      url: "https://etag.txdmv.gov/",
      icon: "🏷️",
    },
    {
      name: "eTITLE",
      description: "Electronic title transfer system",
      url: "https://webdealer.txdmv.gov/",
      icon: "📄",
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader className="bg-blue-50 dark:bg-blue-950">
        <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
          System Logins
        </CardTitle>
        <CardDescription>Access TxDMV dealer systems</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systemLogins.map((system) => (
            <a
              key={system.name}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="text-3xl mr-4">{system.icon}</div>
              <div>
                <h3 className="font-medium text-lg">{system.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {system.description}
                </p>
              </div>
              <ExternalLinkIcon className="ml-auto h-4 w-4 text-gray-400" />
            </a>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-900 flex flex-col items-start">
        <div className="mb-4">
          <p className="font-medium text-sm mb-2">Important Notice:</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Effective July 1, 2025, all dealers will be required to use TxDMV's
            webDEALER system.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/calendar">View webDEALER Training Webinars</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
