import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ChevronRightIcon } from "lucide-react";
import FeedbackForm from "@/polymet/components/feedback-form";
import ReportsFilter from "@/polymet/components/reports-filter";
import ReportsTable from "@/polymet/components/reports-table";
import { REPORTS_DATA } from "@/polymet/data/reports-data";
import Spacer from "@/polymet/components/spacer";

export default function ReportsAndDataPage() {
  const [filteredReports, setFilteredReports] = useState(REPORTS_DATA);

  const handleFilterChange = (categoryId: string) => {
    if (categoryId === "all") {
      setFilteredReports(REPORTS_DATA);
    } else {
      const filtered = REPORTS_DATA.filter(
        (category) => category.categoryId === categoryId
      );
      setFilteredReports(filtered);
    }
  };

  // Initialize with the default selected category (Reports & Data)
  useEffect(() => {
    handleFilterChange("608");
  }, []);

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Reports and Data</h1>

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link to="/" className="flex items-center hover:text-foreground">
          <HomeIcon className="h-4 w-4 mr-1" />
          Home
        </Link>
        <div className="flex items-center">
          <ChevronRightIcon className="h-4 w-4 mx-1" />

          <Link to="/about-us" className="hover:text-foreground">
            About Us
          </Link>
        </div>
        <div className="flex items-center">
          <ChevronRightIcon className="h-4 w-4 mx-1" />

          <span className="text-foreground">Reports and Data</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Texas Department of Motor Vehicles provides various reports and
            data to help stakeholders understand our operations, finances, and
            impact. Use the filter below to find specific reports by category.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Find Reports</h2>
          <ReportsFilter onFilterChange={handleFilterChange} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Report Listing</h2>
          <ReportsTable reportCategories={filteredReports} />
        </div>

        <Spacer height={60} />

        {/* Feedback Form */}
        <FeedbackForm />
      </div>
    </div>
  );
}
