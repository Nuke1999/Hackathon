import { FOOTER_LINKS } from "@/polymet/data/events-data";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Footer() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <footer className="bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Español</SelectItem>
              <SelectItem value="vietnamese">Tiếng Việt</SelectItem>
              <SelectItem value="chinese">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <ul className="space-y-2">
              {FOOTER_LINKS.slice(0, 3).map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {FOOTER_LINKS.slice(3, 6).map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {FOOTER_LINKS.slice(6).map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-300">
          © 2025 Texas Department of Motor Vehicles. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
