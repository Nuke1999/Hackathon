import { useMemo } from "react";
import EventItem from "@/polymet/components/event-item";
import { Event } from "@/polymet/data/events-data";

interface WeekViewProps {
  currentDate: Date;
  events: Event[];
}

export default function WeekView({ currentDate, events }: WeekViewProps) {
  // Get all days in the current week
  const daysInWeek = useMemo(() => {
    const days = [];
    const startOfWeek = new Date(currentDate);

    // Adjust to the start of the week (Sunday)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    // Create array of 7 days starting from Sunday
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }

    return days;
  }, [currentDate]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const grouped: Record<string, Event[]> = {};

    events.forEach((event) => {
      const dateKey = event.date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
    });

    return grouped;
  }, [events]);

  // Get events for a specific day
  const getEventsForDay = (date: Date) => {
    const dateKey = date.toISOString().split("T")[0];
    return eventsByDate[dateKey] || [];
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {daysInWeek.map((day, index) => {
          const isToday = day.getTime() === today.getTime();
          const dayName = day.toLocaleString("default", { weekday: "short" });
          const dayNumber = day.getDate();
          const month = day.toLocaleString("default", { month: "short" });

          return (
            <div
              key={index}
              className={`py-2 text-center ${isToday ? "bg-blue-50" : "bg-gray-100"}`}
            >
              <div className="text-sm font-medium">{dayName}</div>
              <div
                className={`text-lg ${isToday ? "font-bold text-blue-600" : ""}`}
              >
                {dayNumber}
              </div>
              <div className="text-xs text-gray-500">{month}</div>
            </div>
          );
        })}
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {daysInWeek.map((day, index) => {
          const dayEvents = getEventsForDay(day);

          return (
            <div
              key={index}
              className="min-h-[300px] bg-white p-2 overflow-y-auto"
            >
              {dayEvents.length > 0 ? (
                dayEvents.map((event) => (
                  <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    link={event.link}
                    startTime={event.startTime}
                  />
                ))
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  No events
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
