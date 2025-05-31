import Breadcrumb from "@/polymet/components/breadcrumb";
import ContentCard from "@/polymet/components/content-card";
import ContentTabs from "@/polymet/components/content-tabs";
import FeedbackForm from "@/polymet/components/feedback-form";
import GranteesTable from "@/polymet/components/grantees-table";
import HighlightBox from "@/polymet/components/highlight-box";
import Spacer from "@/polymet/components/spacer";
import { GRANTEES_DATA } from "@/polymet/data/grantees-data";
import { FileIcon } from "lucide-react";

export default function MVCPAGranteesPage() {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">MVCPA Grantees</h1>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about-us" },
          { label: "Motor Vehicle Crime Prevention Authority" },
        ]}
      />

      {/* Main Content */}
      <div className="space-y-6">
        {/* 4.1.1. Highlight Box Paragraph */}
        <HighlightBox>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <a
              href="/about-us/MVCPA"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              About MVCPA
            </a>
          </p>
        </HighlightBox>

        {/* 4.1.2. Spacer Paragraph */}
        <Spacer height={60} />

        {/* 4.1.3. Columns Paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Motor Vehicle Crime Prevention Authority (MVCPA) awards financial
              grants to agencies, organizations, and concerned parties in an
              effort to raise public awareness of vehicle theft and burglary and
              implement education and prevention initiatives.
            </p>
          </div>

          {/* Column 2 */}
          <ContentCard title="MVCPA Publications">
            <ul>
              <li>
                <a
                  href="/sites/default/files/body-files/MVCPA_FY2026_Request_for_Application-Taskforce_Grants.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  MVCPA FY2026 Request for Application-Taskforce Grants
                </a>
              </li>
              <li>
                <a
                  href="/sites/default/files/body-files/MVCPA_FY2023_Funds_Report.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  MVCPA FY2023 Funds Report
                </a>
              </li>
              <li>
                <a
                  href="https://ftp.txdmv.gov/pub/txdmv-info/mvcpa/calendar/2022/MVCPA_Plan_of_Operations_FY24-FY25.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  MVCPA FY2024-2025 Plan of Operations
                </a>
              </li>
              <li>
                <a
                  href="/sites/default/files/body-files/MVCPA_2025_Grant_Administrative_Manual.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  MVCPA 2025 Grant Administrative Manual
                </a>
              </li>
            </ul>
          </ContentCard>
        </div>

        {/* 4.1.4. Spacer Paragraph */}
        <Spacer height={60} />

        {/* 4.1.5. Highlight Box Paragraph */}
        <HighlightBox>
          <p>
            The Motor Vehicle Crime Prevention Authority awarded grants for the
            Fiscal Year 2024 programs designed to reduce the incidence of motor
            vehicle burglary and theft.
          </p>
          <p>
            <a
              href="/sites/default/files/body-files/MVCPA-FY-2024-Grant-Listing.pdf"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-1"
            >
              FY2024 Grant Awards
            </a>
            <a
              href="/sites/default/files/body-files/MVCPA-FY-2024-Grant-Listing.pdf"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <FileIcon className="h-4 w-4 inline-block" />
            </a>
          </p>
          <h3 className="text-lg font-semibold mt-4">
            Purposes for Which the Grants are Awarded
          </h3>
          <p>
            The Motor Vehicle Crime Prevention Authority (MVCPA) awards grants
            to local law enforcement agencies and other organizations to combat
            motor vehicle crime to achieve the purposes of Texas Transportation
            Code 1006. This includes (1) providing financial support to law
            enforcement agencies for economic motor vehicle theft and
            fraud-related motor vehicle crime enforcement teams; (2) providing
            financial support to law enforcement agencies, local prosecutors,
            judicial agencies, and neighborhood, community, business, and
            nonprofit organizations for programs designed to reduce the
            incidence of economic motor vehicle theft and fraud-related motor
            vehicle crime; (3) conducting educational programs designed to
            inform motor vehicle owners of methods of preventing motor vehicle
            burglary or theft and fraud-related motor vehicle crime; (4)
            providing equipment, for experimental purposes, to assist motor
            vehicle owners in preventing motor vehicle burglary or theft; and
            (5) establishing a uniform program to prevent stolen motor vehicles
            from entering Mexico. The Texas Legislature prescribed performance
            measures are to (a) increase the recovery of stolen motor vehicles;
            (b) increase the clearance of motor vehicle crime cases (motor
            vehicle burglaries, motor vehicle theft, and fraud-related motor
            vehicle crimes); and (c) increase the number of persons arrested for
            motor vehicle crimes. Border and port security reporting are added
            in Article IX of the General Appropriations Act for some grantees.
          </p>
        </HighlightBox>

        {/* 4.1.6. Spacer Paragraph */}
        <Spacer height={30} />

        {/* 4.1.7. WYSIWYG Paragraph */}
        <div className="prose dark:prose-invert max-w-none">
          <h2>More Information</h2>
          <p>
            For more information, please email the Motor Vehicle Crime
            Prevention Authority at{" "}
            <a
              href="mailto:askmvcpa@txdmv.gov"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              AskMVCPA
            </a>{" "}
            or call (512) 465-1485.
          </p>
        </div>

        {/* 4.1.8. Tabs Paragraph */}
        <ContentTabs
          tabs={[
            {
              value: "grantees",
              label: "List of Grantees",
              content: (
                <div>
                  <p>
                    The Motor Vehicle Crime Prevention Authority (MVCPA)
                    oversees the impact of auto theft in Texas and provides
                    financial support to fight it.
                  </p>
                  <p>
                    Use the map below to find your local area task force or view
                    the complete list.
                  </p>
                  <div className="my-6">
                    <iframe
                      frameBorder="0"
                      height="450"
                      scrolling="no"
                      src="https://www.google.com/maps/d/embed?mid=zGj8fIpo79Ow.ktvfPNKNFt3s"
                      title="MVCPA Grantee Map Locations"
                      width="100%"
                      className="border rounded"
                    />

                    <div className="text-sm mt-2">
                      View{" "}
                      <a
                        href="https://www.google.com/maps/d/viewer?mid=zGj8fIpo79Ow.ktvfPNKNFt3s"
                        style={{ color: "#0000ff" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MVCPA Grantees
                      </a>{" "}
                      in a larger map
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Table of Grantees
                    </h3>
                    <GranteesTable grantees={GRANTEES_DATA} />
                  </div>
                </div>
              ),
            },
          ]}
        />

        {/* 4.1.9. Spacer Paragraph */}
        <Spacer height={60} />

        {/* Feedback Form */}
        <FeedbackForm />
      </div>
    </div>
  );
}
