import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileIcon } from "lucide-react";
import { PRESS_RELEASES_DATA } from "@/polymet/data/press-releases-data";

export default function PressReleaseAccordion() {
  const [openYears, setOpenYears] = useState<string[]>(["2024"]);

  return (
    <div className="space-y-4">
      <Accordion
        type="multiple"
        value={openYears}
        onValueChange={setOpenYears}
        className="space-y-2"
      >
        {Object.entries(PRESS_RELEASES_DATA)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, releases]) => (
            <AccordionItem
              key={year}
              value={year}
              className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium">
                {year} Press Releases
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-4/5">Title</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {releases.map((release, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <a
                              href={release.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-start"
                            >
                              <span className="flex-grow">{release.title}</span>
                              <FileIcon className="h-4 w-4 ml-2 mt-1 flex-shrink-0" />
                            </a>
                          </TableCell>
                          <TableCell>{release.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}
