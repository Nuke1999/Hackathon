import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MetalPlatesInfo() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="bg-amber-50 dark:bg-amber-950">
        <CardTitle className="text-xl text-amber-900 dark:text-amber-100">
          Metal Plates Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Alert variant="warning" className="mb-4">
          <AlertCircleIcon className="h-4 w-4" />

          <AlertTitle>Important Notice for License Holders</AlertTitle>
          <AlertDescription>
            Under TxDMV's Board Rules, license holders with metal plates have 10
            days from the time the license is revoked, closed, or canceled to
            return industry license plates to TxDMV.
          </AlertDescription>
        </Alert>

        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="font-bold mb-2">
            Texas Motor Vehicle Dealers and Other Licensees with Metal Plates:
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Return canceled, damaged, or unneeded metal plates to any of our 16
            Regional Service Centers or the TxDMV Headquarters. To cancel metal
            plates login to your eLICENSING account and select "Plates &
            Stickers."
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
