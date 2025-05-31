import { FileTextIcon, VideoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ETitleResources() {
  const resources = [
    {
      title: "Dealer eTITLE Training",
      description: "Video training for dealers on using the eTITLE system",
      icon: <VideoIcon className="h-5 w-5" />,

      url: "http://ftp.txdmv.gov/pub/txdmv-info/vtr/media/2019-07-Dealer_eTITLE_Training.mp4",
      type: "Video",
    },
    {
      title: "eTITLE User Guide",
      description: "Comprehensive guide for using the eTITLE system",
      icon: <FileTextIcon className="h-5 w-5" />,

      url: "/sites/default/files/body-files/eTITLE_User_Guide.pdf",
      type: "PDF",
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader className="bg-green-50 dark:bg-green-950">
        <CardTitle className="text-xl text-green-900 dark:text-green-100">
          eTITLE Resources
        </CardTitle>
        <CardDescription>
          Tools to help you use the new eTITLE feature in webDEALER
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="font-bold text-lg mb-2">We Are Excited To Announce</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The addition of eTITLE to webDEALER. This new feature will
            facilitate the secure electronic transfer of titles between dealers
            in the wholesale market, making the title transfer process faster
            and easier than ever before. If you are using webDEALER, you already
            have access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full mr-3">
                  {resource.icon}
                </div>
                <h3 className="font-medium">{resource.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {resource.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto self-start"
              >
                View {resource.type}
              </Button>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
