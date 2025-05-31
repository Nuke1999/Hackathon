import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

interface Grantee {
  name: string;
  slug: string;
  address: string;
  phone: string;
  website: string;
}

interface GranteesTableProps {
  grantees: Grantee[];
}

export default function GranteesTable({ grantees }: GranteesTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Grantee</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Website</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grantees.map((grantee) => (
            <TableRow key={grantee.slug}>
              <TableCell className="font-medium">
                <Link
                  to={`/mvcpa-grantees/${grantee.slug}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {grantee.name}
                </Link>
              </TableCell>
              <TableCell>{grantee.address}</TableCell>
              <TableCell>
                <a
                  href={`tel:${grantee.phone.replace(/\D/g, "")}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {grantee.phone}
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={grantee.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 text-xs font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black transition-colors"
                >
                  website
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
