import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/polymet/layouts/default-layout";
import MVCPAGranteesPage from "@/polymet/pages/mvcpa-grantees";
import MVCPAGranteeDetailPage from "@/polymet/pages/mvcpa-grantee-detail";
import ReportsAndDataPage from "@/polymet/pages/reports-and-data";
import MediaPage from "@/polymet/pages/media";
import AboutUsPage from "@/polymet/pages/about-us";

export default function TxDMVPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <MVCPAGranteesPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/mvcpa-grantees"
          element={
            <DefaultLayout>
              <MVCPAGranteesPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/mvcpa-grantees/:slug"
          element={
            <DefaultLayout>
              <MVCPAGranteeDetailPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/about-us/reports-and-data"
          element={
            <DefaultLayout>
              <ReportsAndDataPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/about-us/media"
          element={
            <DefaultLayout>
              <MediaPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/about-us"
          element={
            <DefaultLayout>
              <AboutUsPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}
