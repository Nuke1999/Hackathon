import { useState } from "react";
import Breadcrumb from "@/polymet/components/breadcrumb";
import ContentTabs from "@/polymet/components/content-tabs";
import FeedbackForm from "@/polymet/components/feedback-form";
import PressReleaseAccordion from "@/polymet/components/press-release-accordion";
import SocialMediaGuidelines from "@/polymet/components/social-media-guidelines";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Spacer from "@/polymet/components/spacer";

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("social-media");

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Media</h1>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[{ label: "About Us", href: "/about-us" }, { label: "Media" }]}
      />

      {/* Main Content */}
      <div className="space-y-6 mt-6">
        {/* Introductory Text */}
        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Texas Department of Motor Vehicles welcomes questions from the
            news media.
          </p>
          <p>
            Please send media inquiries via email to{" "}
            <a
              href="mailto:Media@TxDMV.gov"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Media@TxDMV.gov
            </a>{" "}
            or call our media contact, Adam Shaivitz, at (512) 465-1484.
          </p>
          <p>
            If you are not with the news media please call 1-888-368-4689 or
            visit our main contact page via our website's header.
          </p>
          <p>
            TxDMV budget and expenditure numbers are available at{" "}
            <a
              href="http://www.texastransparency.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
            >
              www.texastransparency.org
              <ExternalLinkIcon className="ml-1 h-3 w-3" />
            </a>
            .
          </p>
        </div>

        {/* Driver's Privacy Protection Act Call to Action */}
        <div className="mt-4">
          <Link to="/drivers-privacy-protection-act">
            <Button variant="outline" className="flex items-center gap-2">
              Driver's Privacy Protection Act and Public Information
            </Button>
          </Link>
        </div>

        <Spacer height={30} />

        {/* Tabs Section */}
        <ContentTabs
          tabs={[
            {
              value: "social-media",
              label: "Social Media",
              content: <SocialMediaGuidelines />,
            },
            {
              value: "press-releases",
              label: "Press Releases",
              content: <PressReleaseAccordion />,
            },
          ]}
          defaultValue={activeTab}
        />

        <Spacer height={60} />

        {/* Feedback Form */}
        <FeedbackForm />
      </div>
    </div>
  );
}
