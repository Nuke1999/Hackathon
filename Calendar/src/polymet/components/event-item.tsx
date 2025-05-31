import { CalendarIcon, ClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface EventItemProps {
  id: string;
  title: string;
  link: string;
  startTime: string;
  compact?: boolean;
  className?: string;
}

export default function EventItem({
  id,
  title,
  link,
  startTime,
  compact = false,
  className,
}: EventItemProps) {
  // Format the time from 24-hour to 12-hour format
  const formatTime = (time: string) => {
    if (!time) return "";

    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    if (minutes === 0) {
      return `${formattedHours} ${period}`;
    }

    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  if (compact) {
    return (
      <a
        href={link}
        className={cn(
          "block text-xs p-1 mb-1 bg-blue-50 hover:bg-blue-100 rounded truncate",
          className
        )}
        title={title}
      >
        {formatTime(startTime)} - {title}
      </a>
    );
  }

  return (
    <a
      href={link}
      className={cn(
        "block p-3 mb-2 border rounded-md hover:bg-gray-50 transition-colors",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <ClockIcon className="h-4 w-4 text-gray-500" />

        <span className="text-sm text-gray-600">{formatTime(startTime)}</span>
      </div>
      <h3 className="font-medium">{title}</h3>
      <div className="flex items-center gap-2 mt-2">
        <Badge variant="outline" className="text-xs font-normal">
          Event #{id}
        </Badge>
      </div>
    </a>
  );
}
