import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsLayout from "@/polymet/layouts/events-layout";
import EventsCalendarPage from "@/polymet/pages/events-calendar";

export default function EventsPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <EventsLayout>
              <EventsCalendarPage />
            </EventsLayout>
          }
        />

        <Route
          path="/events-calendar"
          element={
            <EventsLayout>
              <EventsCalendarPage />
            </EventsLayout>
          }
        />
      </Routes>
    </Router>
  );
}
