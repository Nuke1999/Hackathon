import { useParams } from "react-router-dom";
import Breadcrumb from "@/polymet/components/breadcrumb";
import { GRANTEES_DATA } from "@/polymet/data/grantees-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, GlobeIcon, ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function MVCPAGranteeDetailPage() {
  const { slug = "" } = useParams();

  // Find the grantee by slug
  const grantee = GRANTEES_DATA.find((g) => g.slug === slug);

  // If no grantee is found, show a message
  if (!grantee) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Grantee Not Found</h1>
        <p className="mb-6">
          The grantee you are looking for does not exist or has been moved.
        </p>
        <Link to="/mvcpa-grantees">
          <Button>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Grantees List
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">{grantee.name}</h1>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about-us" },
          {
            label: "Motor Vehicle Crime Prevention Authority",
            href: "/mvcpa-grantees",
          },
          { label: grantee.name },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                About {grantee.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The {grantee.name} is part of the Motor Vehicle Crime Prevention
                Authority's network of law enforcement agencies and task forces
                working to combat motor vehicle theft and burglary in Texas.
                This task force is dedicated to reducing vehicle crimes through
                enforcement, education, and prevention initiatives.
              </p>

              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Investigation of motor vehicle theft and burglary cases</li>
                <li>Recovery of stolen vehicles</li>
                <li>Public education on vehicle theft prevention</li>
                <li>Coordination with other law enforcement agencies</li>
                <li>Community outreach programs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Jurisdiction</h3>
              <p className="text-gray-600 dark:text-gray-300">
                This task force operates within its designated jurisdiction to
                combat vehicle crimes and work collaboratively with other
                agencies in the region.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />

                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {grantee.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />

                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href={`tel:${grantee.phone.replace(/\D/g, "")}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {grantee.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <GlobeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />

                  <div>
                    <h3 className="font-medium">Website</h3>
                    <a
                      href={grantee.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 break-words"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBG7LgU_i2n_uVd-bUEcfQ9CZvvYc-e4ZM&q=${encodeURIComponent(grantee.address)}`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Link to="/mvcpa-grantees">
              <Button variant="outline" className="w-full">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Grantees List
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
