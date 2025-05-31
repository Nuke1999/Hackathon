import { Link } from "react-router-dom";
import { ClockIcon, PhoneIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ClockIcon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />

            <div>
              <h3 className="font-bold text-sm">TxDMV Business Hours</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Mon to Fri, 8AM-5PM (Central Time)
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />

            <Link
              to="/contact-us"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              View Detailed Contact Information
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Texas Department of Motor Vehicles.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
