import { Link } from "react-router-dom";
import Breadcrumb from "@/polymet/components/breadcrumb";
import FeedbackForm from "@/polymet/components/feedback-form";
import Spacer from "@/polymet/components/spacer";
import { Button } from "@/components/ui/button";
import { FileTextIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: "About Us" }]} />

      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        {/* Introduction */}
        <section className="mb-8">
          <p className="mb-4">
            The Texas Department of Motor Vehicles (TxDMV) was created by the
            state legislature in 2009 to enhance customer service, consumer
            protection and the success of motor vehicle-related industries. The
            department administers broad-ranging motor vehicle programs
            including vehicle registration and titling; vehicle dealer
            regulation; bus and carrier credentialing for intrastate and
            interstate commerce; oversize and overweight permit issuance; and
            grants to law enforcement agencies to reduce vehicle burglaries and
            thefts.
          </p>
          <p className="mb-4">
            The department is one of a handful of state agencies that brings in
            more revenue for the state than it expends on its own operations.
            The majority of revenue collections are used to build and maintain
            the state's transportation infrastructure.
          </p>
          <p className="mb-4">
            A nine-member board, appointed by the governor, oversees TxDMV
            policy making activities. Daily operations are managed by the
            agency's executive director and professional staff to achieve the
            department's mission: "To serve, protect and advance the citizens
            and industries in the state with quality motor vehicle related
            services."
          </p>
        </section>

        {/* Anchor Menu Links */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/about-us/txdmv-board"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            TxDMV Board
          </Link>
          <Link
            to="/about-us/executive-team"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            TxDMV Executive Team
          </Link>
          <Link
            to="/about-us/txdmv-board-meetings"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            Board & Public Meetings
          </Link>
          <a
            href="/sites/default/files/body-files/txdmv_orgchart.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            Organization Chart
          </a>
          <Link
            to="/publications"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            Publications
          </Link>
        </section>

        {/* Program Areas */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Program Areas</h2>

          {/* Consumer Relations Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Consumer Relations Division
            </h3>
            <p className="mb-4">
              If you have questions, they have answers in the Consumer Relations
              Division where you will find customer representatives eager to
              answer your calls and emails. The hallmark of this division's
              staff members is their dedication to being professional but
              personal as they help consumers and motor vehicle-related business
              owners - almost 1 million each year - find the information they
              need to complete their business with the agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                <span>Phone: (888) 368-4689</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2 text-gray-500" />

                <a
                  href="mailto:AskDMV@TXDMV.gov"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  AskDMV@TXDMV.gov
                </a>
              </div>
            </div>
          </div>

          {/* Enforcement Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">Enforcement Division</h3>
            <p className="mb-4">
              Did a moving company promise you a cheap rate and then hold your
              belongings hostage for more money? Did an auto dealer fail to
              title your vehicle for you? Did you run out to buy that new truck
              you saw advertised for an amazing price only to be subjected to a
              "bait and switch" scheme?
            </p>
            <p className="mb-4">
              These situations and much, much more fall under the Enforcement
              Division, which regulates manufacturers, dealers, moving
              companies, and other motor vehicle-related businesses, including
              motor carriers and salvage dealers. The division also administers
              the state's Lemon Law, which can provide relief to consumers who
              can prove the new car they bought is a lemon. Each year the
              division reviews and investigates an average of 15,000 complaints
              from consumers, law enforcement and other government agencies.
            </p>
            <div className="mb-4">
              <Link to="/complaints">
                <Button>File a Complaint</Button>
              </Link>
            </div>

            <h4 className="text-lg font-medium mb-3">
              General Enforcement Contacts (not for complaints)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Motor Vehicle Dealer Enforcement</p>
                <a
                  href="mailto:enforcement@txdmv.gov"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                >
                  <MailIcon className="h-4 w-4 mr-2" />
                  enforcement@TXDMV.gov
                </a>
              </div>

              <div>
                <p className="font-medium">Motor Carrier Enforcement</p>
                <a
                  href="mailto:truckstop@txdmv.gov"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-1"
                >
                  <MailIcon className="h-4 w-4 mr-2" />
                  truckstop@TXDMV.gov
                </a>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                  <span>Phone: (512) 465-4207</span>
                </div>
              </div>

              <div>
                <p className="font-medium">Lemon Law Enforcement</p>
                <a
                  href="mailto:LEMONLAW@txdmv.gov"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-1"
                >
                  <MailIcon className="h-4 w-4 mr-2" />
                  LEMONLAW@TXDMV.gov
                </a>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                  <span>Phone: (888) 368-4689 or (512) 465-3000</span>
                </div>
              </div>

              <div>
                <p className="font-medium">
                  Enforcement Administrative Staff Support
                </p>
                <a
                  href="mailto:enforcement@txdmv.gov"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-1"
                >
                  <MailIcon className="h-4 w-4 mr-2" />
                  enforcement@TXDMV.gov
                </a>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                  <span>Phone: (512) 465-4204</span>
                </div>
              </div>

              <div>
                <p className="font-medium">Dealer Enforcement Training</p>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                  <span>Phone: (512) 465-3000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Finance and Operations Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Finance and Operations Division
            </h3>
            <p className="mb-4">
              The Finance and Operations Division is responsible for managing
              the department's financial transactions, ensuring the integrity of
              the accounting records and maintaining adequate internal controls
              to safeguard the department's financial assets. The division also
              oversees centralized services, including the day-to-day resources
              and support for the department's physical facilities.
            </p>
          </div>

          {/* Government and Strategic Communications Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Government and Strategic Communications Division
            </h3>
            <p className="mb-4">
              The Government and Strategic Communications Division coordinates
              the department's public engagement activities and manages
              relationships with legislative offices, media outlets, and
              stakeholder groups. Division staff oversee website and social
              media content releases, public awareness and educational
              campaigns, and responses to inquiries by elected officials.
            </p>
            <div className="flex items-center">
              <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

              <span>Phone: (512) 465-1484</span>
            </div>
          </div>

          {/* Human Resources */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">Human Resources</h3>
            <p className="mb-4">
              The Human Resources (HR) division provides a full array of HR
              services to the agency including talent acquisition, benefit
              information, employee relations, classification, compensation,
              organization development, employee training and HR information and
              policy.
            </p>
            <div className="flex items-center mb-3">
              <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

              <span>Military Liaison: (512) 465-4058</span>
            </div>
            <Link
              to="/careers/txdmv-a-good-place-to-work"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              TxDMV A GOOD PLACE TO WORK
            </Link>
          </div>

          {/* Information Technology */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Information Technology
            </h3>
            <p className="mb-4">
              The Information Technology division is responsible for agency-wide
              information technology needs and overall responsibility for the
              maintenance and support of the agency's major systems and
              technologies.
            </p>
          </div>

          {/* Internal Audit Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Internal Audit Division
            </h3>
            <p className="mb-4">
              The Internal Audit Division helps to identify and improve existing
              agency operations. Staff reviews policies, processes and
              procedures, making recommendations to agency management to ensure
              the efficient and effective use of resources, and to reduce the
              likelihood of fraud, waste and abuse. The division is an
              independent, objective, assurance and consulting activity and
              reports directly to the board.
            </p>
            <Link
              to="/motorists/consumer-protection/internal-audit-division"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              More about the Internal Audit Division
            </Link>
          </div>

          {/* Motor Carrier Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Motor Carrier Division
            </h3>
            <p className="mb-4">
              The Motor Carrier Division helps the transportation industry
              conduct interstate and intrastate commerce. It grants commercial
              motor carriers, moving companies and passenger carriers the
              license plates, operating authority (Texas Department of Motor
              Vehicles Number and Unified Carrier Registration) and the
              oversize/overweight permits they need to move people and cargo
              safely and efficiently.
            </p>
            <div className="flex items-center">
              <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

              <span>Phone: (800) 299-1700</span>
            </div>
          </div>

          {/* Motor Vehicle Crime Prevention Authority */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Motor Vehicle Crime Prevention Authority
            </h3>
            <p className="mb-4">
              The Motor Vehicle Crime Prevention Authority (MVCPA) educates
              Texans on how to protect themselves from motor vehicle theft and
              awards financial grants to curtail auto theft and burglary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <a
                href="mailto:askMVCPA@TxDMV.gov"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <MailIcon className="h-4 w-4 mr-2" />
                askMVCPA@TxDMV.gov
              </a>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                <span>Phone: (512) 465-1485</span>
              </div>
            </div>
            <Link
              to="/about-us/MVCPA"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              More about the Motor Vehicle Crime Prevention Authority
            </Link>
          </div>

          {/* Motor Vehicle Division */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Motor Vehicle Division
            </h3>
            <p className="mb-4">
              The Motor Vehicle Division licenses dealers and manufacturers and
              other types of motor vehicle-related businesses. The licensing
              system helps to ensure a sound system of distributing and selling
              motor vehicles and regulating motor vehicle manufacturers. In
              Texas there are more than 2,500 licensed new (franchise) vehicle
              dealers and almost 15,000 used (independent) dealers.
            </p>
          </div>

          {/* Office of Administrative Hearings */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Office of Administrative Hearings
            </h3>
            <p className="mb-4">
              The Office of Administrative Hearings provides an independent
              forum for hearings for consumer complaints filed under the Texas
              Lemon Law. Responsibilities of the Office of Administrative
              Hearings include conducting administrative hearings regarding
              Lemon Law and warranty protection complaints and issuing decisions
              and orders pursuant to the Texas Occupations Code.
            </p>
            <div className="flex flex-col gap-2 mb-3">
              <a
                href="mailto:officeadminhearings@txdmv.gov"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <MailIcon className="h-4 w-4 mr-2" />
                officeadminhearings@txdmv.gov
              </a>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                <span>Phone: (512) 465-5000</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                <span>Fax: (512) 465-5656</span>
              </div>
            </div>
            <Link
              to="/motorists/consumer-protection/the-office-of-administrative-hearings"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              More about the Office of Administrative Hearings
            </Link>
          </div>

          {/* Civil Rights Officer */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">Civil Rights Officer</h3>
            <p className="mb-4">
              The Civil Rights Officer is responsible for affirmative action and
              Title VI/Equal Employment Opportunity contract compliance.
            </p>
            <p className="font-medium mb-2">Document downloads:</p>
            <div className="flex flex-col gap-2">
              <a
                href="/sites/default/files/body-files/FY2024-Public-Notice-of-Title-VI-Program-Rights.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <FileTextIcon className="mr-2 h-4 w-4" />
                Public Notice of Title VI Program Rights
              </a>
              <a
                href="/sites/default/files/body-files/Advertencia_P%C3%BAblica_de_los_Derechos_Bajo_el_Programa_T%C3%ADtulo_VI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <FileTextIcon className="mr-2 h-4 w-4" />
                Advertencia Pública de los Derechos Bajo el Programa Título VI
              </a>
            </div>
          </div>

          {/* Office of General Counsel */}
          <div className="mb-8 border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              Office of General Counsel
            </h3>
            <p className="mb-4">
              The Office of General Counsel represents the agency and provides
              legal advice to the board, executive director, and other agency
              divisions. The office provides advice regarding laws and
              regulations on topics such as motor carriers, vehicle titles and
              registration, human resources, open records, and open meetings. It
              assists with legislation, reviews contracts, and participates in
              all phases of rulemaking. The office also works with the Office of
              the Attorney General on legal matters involving the agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <a
                href="mailto:GCO_General@txdmv.gov"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <MailIcon className="h-4 w-4 mr-2" />
                GCO_General@txdmv.gov
              </a>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" />

                <span>Phone: (512) 465-5665</span>
              </div>
            </div>
            <Link
              to="/general-counsel"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4"
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              Statutes & Rules
            </Link>
            <div>
              <Link to="/open-records">
                <Button>File a Public Information Request</Button>
              </Link>
            </div>
          </div>

          {/* Vehicle Titles and Registration Division */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">
              Vehicle Titles and Registration Division
            </h3>
            <p className="mb-4">
              The Vehicle Titles and Registration Division is responsible for
              vehicle titling, registration and issuing license plates and
              disabled placards. It oversees 16 Regional Service Centers and
              provides policy and procedural support to the 254 county tax
              assessor-collectors, who process registration and title
              applications throughout Texas. The division also updates and
              maintains the state motor vehicle database. There are nearly 26
              million registered vehicles in Texas. The division collects more
              than $4.5 billion in registration fees, title fees, and motor
              vehicle sales tax, the majority of which is deposited into the
              State Highway Fund to build and maintain Texas' highways, roads
              and bridges.
            </p>
          </div>
        </section>
      </div>

      <Spacer height={40} />

      {/* Feedback Form */}
      <div className="max-w-2xl">
        <FeedbackForm />
      </div>

      <Spacer height={40} />
    </div>
  );
}
