import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

interface ReportsFilterProps {
  onFilterChange: (categoryId: string) => void;
}

export default function ReportsFilter({ onFilterChange }: ReportsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("608");

  const handleSearch = () => {
    onFilterChange(selectedCategory);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className="space-y-2 flex-1 min-w-[250px]">
        <label htmlFor="category-filter" className="text-sm font-medium">
          Category
        </label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger id="category-filter" className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">- Any -</SelectItem>
              <SelectItem value="608">Reports &amp; Data</SelectItem>
              <SelectItem value="609">-Annual Reports</SelectItem>
              <SelectItem value="611">-Finance</SelectItem>
              <SelectItem value="612">-Internal Audit</SelectItem>
              <SelectItem value="610">
                -Motor Vehicle Crime Prevention Authority
              </SelectItem>
              <SelectItem value="613">-Motor Carriers</SelectItem>
              <SelectItem value="606">
                --Commercial Fleet Services / TxIRP
              </SelectItem>
              <SelectItem value="605">--Operating Authority / UCR</SelectItem>
              <SelectItem value="607">--OS/OW Permits</SelectItem>
              <SelectItem value="3224">-Specialty License Plates</SelectItem>
              <SelectItem value="3225">
                -Vehicles Registered by Registration Class
              </SelectItem>
              <SelectItem value="3226">
                -Vehicles Registered and License Fees by County and Regional
                Office
              </SelectItem>
              <SelectItem value="3223">
                -Vehicle Titles and Registration Data
              </SelectItem>
              <SelectItem value="3229">
                -Vehicle Titles and Registration Fact Sheets
              </SelectItem>
              <SelectItem value="3341">
                -Vehicle Titles Issued and Title Fees Collected by County
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleSearch} className="mt-6">
        <SearchIcon className="h-4 w-4 mr-2" />
        Search Reports
      </Button>
    </div>
  );
}
