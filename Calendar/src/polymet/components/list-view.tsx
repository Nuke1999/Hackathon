import { useMemo, useState } from "react";
import EventItem from "@/polymet/components/event-item";
import { Event } from "@/polymet/data/events-data";
import { CalendarIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ListViewProps {
  currentDate: Date;
  events: Event[];
}

interface GroupedEvents {
  [key: string]: {
    date: Date;
    events: Event[];
  };
}

export default function ListView({ currentDate, events }: ListViewProps) {
  // Group events by date
  const groupedEvents = useMemo(() => {
    const grouped: GroupedEvents = {};

    // Get the current month and year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Filter events for the current month
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });

    // Group by date
    filteredEvents.forEach((event) => {
      if (!grouped[event.date]) {
        grouped[event.date] = {
          date: new Date(event.date),
          events: [],
        };
      }
      grouped[event.date].events.push(event);
    });

    return grouped;
  }, [currentDate, events]);

  // Sort dates
  const sortedDates = useMemo(() => {
    return Object.keys(groupedEvents).sort();
  }, [groupedEvents]);

  // Track expanded dates
  const [expandedDates, setExpandedDates] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDate = (date: string) => {
    setExpandedDates((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  if (sortedDates.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />

        <p className="text-gray-500">No events scheduled for this month</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow divide-y">
      {sortedDates.map((dateKey) => {
        const { date, events } = groupedEvents[dateKey];
        const isExpanded = expandedDates[dateKey] !== false; // Default to expanded

        return (
          <div key={dateKey} className="p-4">
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center p-2 hover:bg-gray-50"
              onClick={() => toggleDate(dateKey)}
            >
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-blue-500" />

                <span className="font-medium">{formatDate(date)}</span>
                <span className="text-sm text-gray-500">
                  ({events.length} events)
                </span>
              </div>
              {isExpanded ? (
                <ChevronDownIcon className="h-5 w-5" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" />
              )}
            </Button>

            {isExpanded && (
              <div className="mt-2 pl-7 space-y-2">
                {events.map((event) => (
                  <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    link={event.link}
                    startTime={event.startTime}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
