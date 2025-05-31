import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FacebookIcon, YoutubeIcon, TwitterIcon } from "lucide-react";

export default function SocialMediaGuidelines() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Stay on top of the latest news at the TxDMV by liking us on Facebook,
          subscribing to our YouTube channel and following us on Twitter.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connect with Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.facebook.com/TxDMV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FacebookIcon className="h-5 w-5 text-blue-600" />

              <span>Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/user/TxDMV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <YoutubeIcon className="h-5 w-5 text-red-600" />

              <span>YouTube Channel</span>
            </a>
            <a
              href="http://twitter.com/txdmv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <TwitterIcon className="h-5 w-5 text-blue-400" />

              <span>Twitter</span>
            </a>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Social Media Comments and Questions Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The Texas Department of Motor Vehicles (TxDMV) welcomes your
              comments and questions via social media. We're happy to help you
              during regular business hours. But please be aware that for some
              inquiries we may ask you to follow up with us by{" "}
              <Link
                to="/contact-us#phone"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                phone or email
              </Link>
              , especially if we'll need your personal information (vehicle
              identification number, address, etc.) in order to research your
              question.
            </p>

            <p>
              The TxDMV strives for effective communication and respectful
              dialogue on our Facebook page. Any posts or comments that are
              counter to these guidelines will be removed:
            </p>

            <ul>
              <li>
                Comments must be relevant to the topic of discussion and avoid
                any malicious, offensive, threatening or profane language as
                well as any personal attacks.
              </li>
              <li>
                Links to external websites may be deleted if they are not
                relevant to the topic of discussion or appropriate for all
                audiences.
              </li>
              <li>
                Do not post any personal information such as your address, phone
                number or vehicle information.
              </li>
              <li>Political campaign messages are prohibited.</li>
              <li>
                Solicitations or advertisements are prohibited. This includes
                promotion or endorsement of any financial, commercial or
                non-governmental agency.
              </li>
            </ul>

            <p>
              Our social media sites are hosted outside of the TxDMV website.
              Please remember that the best way to receive a secure, official,
              personal response (especially when sensitive information is
              involved) is to contact our agency through{" "}
              <Link
                to="/contact-us#contact-us-online"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                these methods
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
