import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileIcon } from "lucide-react";

interface Report {
  title: string;
  link: string;
}

interface ReportCategory {
  categoryId: string;
  categoryName: string;
  categoryLink: string;
  reports: Report[];
}

interface ReportsTableProps {
  reportCategories: ReportCategory[];
}

export default function ReportsTable({ reportCategories }: ReportsTableProps) {
  if (reportCategories.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No reports found matching the selected criteria.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Category</TableHead>
            <TableHead>Report</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reportCategories.map((category) => (
            <TableRow key={category.categoryId}>
              <TableCell className="align-top font-medium">
                <Link
                  to={category.categoryLink}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {category.categoryName}
                </Link>
              </TableCell>
              <TableCell>
                <ul className="space-y-2">
                  {category.reports.map((report, index) => (
                    <li key={index} className="flex items-start">
                      <a
                        href={report.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-start"
                      >
                        <span className="flex-grow">{report.title}</span>
                        <FileIcon className="h-4 w-4 ml-2 mt-1 flex-shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
