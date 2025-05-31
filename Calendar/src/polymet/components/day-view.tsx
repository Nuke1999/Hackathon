import { useMemo } from "react";
import EventItem from "@/polymet/components/event-item";
import { Event } from "@/polymet/data/events-data";
import { CalendarIcon } from "lucide-react";

interface DayViewProps {
  currentDate: Date;
  events: Event[];
}

export default function DayView({ currentDate, events }: DayViewProps) {
  // Format the date for comparison
  const formattedCurrentDate = useMemo(() => {
    return currentDate.toISOString().split("T")[0];
  }, [currentDate]);

  // Filter events for the current day
  const dayEvents = useMemo(() => {
    return events.filter((event) => event.date === formattedCurrentDate);
  }, [events, formattedCurrentDate]);

  // Sort events by start time
  const sortedEvents = useMemo(() => {
    return [...dayEvents].sort((a, b) => {
      return a.startTime.localeCompare(b.startTime);
    });
  }, [dayEvents]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-2 mb-6">
        <CalendarIcon className="h-5 w-5 text-blue-500" />

        <h2 className="text-xl font-semibold">{formatDate(currentDate)}</h2>
      </div>

      {sortedEvents.length > 0 ? (
        <div className="space-y-4">
          {sortedEvents.map((event) => (
            <EventItem
              key={event.id}
              id={event.id}
              title={event.title}
              link={event.link}
              startTime={event.startTime}
              className="border-l-4 border-blue-500"
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />

          <p className="text-gray-500">No events scheduled for this day</p>
        </div>
      )}
    </div>
  );
}
