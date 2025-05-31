import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface CalendarNavigationProps {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  view: "month" | "week" | "day" | "list";
  onViewChange: (view: "month" | "week" | "day" | "list") => void;
}

export default function CalendarNavigation({
  currentDate,
  onPrevious,
  onNext,
  onToday,
  view,
  onViewChange,
}: CalendarNavigationProps) {
  const formatCurrentDate = () => {
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    if (view === "month") {
      return `${month} ${year}`;
    } else if (view === "week") {
      // Get start and end of week
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const startMonth = startOfWeek.toLocaleString("default", {
        month: "short",
      });
      const endMonth = endOfWeek.toLocaleString("default", { month: "short" });

      return `${startMonth} ${startOfWeek.getDate()} - ${endMonth} ${endOfWeek.getDate()}, ${year}`;
    } else if (view === "day") {
      const day = currentDate.getDate();
      return `${month} ${day}, ${year}`;
    } else {
      return `${month} ${year}`;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          aria-label="Previous"
        >
          <ChevronLeftIcon className="h-4 w-4" />

          <span className="ml-1">Prev</span>
        </Button>
        <Button variant="outline" size="sm" onClick={onToday}>
          Today
        </Button>
        <Button variant="outline" size="sm" onClick={onNext} aria-label="Next">
          <span className="mr-1">Next</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>

      <h2 className="text-xl font-semibold">{formatCurrentDate()}</h2>

      <div className="flex gap-1 border rounded-md">
        <Button
          variant={view === "month" ? "default" : "ghost"}
          size="sm"
          onClick={() => onViewChange("month")}
          className="rounded-none"
        >
          Month
        </Button>
        <Button
          variant={view === "week" ? "default" : "ghost"}
          size="sm"
          onClick={() => onViewChange("week")}
          className="rounded-none"
        >
          Week
        </Button>
        <Button
          variant={view === "day" ? "default" : "ghost"}
          size="sm"
          onClick={() => onViewChange("day")}
          className="rounded-none"
        >
          Day
        </Button>
        <Button
          variant={view === "list" ? "default" : "ghost"}
          size="sm"
          onClick={() => onViewChange("list")}
          className="rounded-none"
        >
          List
        </Button>
      </div>
    </div>
  );
}
