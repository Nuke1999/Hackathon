import { Helmet } from "react-helmet";

import { Button } from "@/components/ui/button";
import DealerSystemLogins from "@/polymet/components/dealer-system-logins";
import DealerToolbox from "@/polymet/components/dealer-toolbox";
import ETitleResources from "@/polymet/components/etitle-resources";
import MetalPlatesInfo from "@/polymet/components/metal-plates-info";

export default function DealersPage() {
  return (
    <>
      <Helmet>
        <title>Dealers | TxDMV.gov</title>
        <link href="http://www.txdmv.gov/dealers" rel="canonical" />
      </Helmet>

      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Dealer Resources</h1>
          <p className="mt-2 text-blue-100 max-w-2xl">
            Access tools, information, and resources for Texas motor vehicle
            dealers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <DealerSystemLogins />

            <ETitleResources />

            <MetalPlatesInfo />
          </div>

          <div className="space-y-6">
            <DealerToolbox />

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our dealer support team is available to help with any questions
                or issues you may have.
              </p>
              <Button className="w-full">Contact Dealer Support</Button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-800 pb-3">
                  <h3 className="font-medium">webDEALER Training Webinar</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    June 15, 2023 • 10:00 AM - 12:00 PM
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-800 pb-3">
                  <h3 className="font-medium">Dealer Licensing Workshop</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    June 22, 2023 • 1:00 PM - 3:00 PM
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">eTITLE System Update</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July 5, 2023 • 11:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
