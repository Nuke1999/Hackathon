import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DealersLayout from "@/polymet/layouts/dealers-layout";
import DealersPage from "@/polymet/pages/dealers-page";

export default function TxdmvPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DealersLayout>
              <DealersPage />
            </DealersLayout>
          }
        />

        <Route
          path="/dealers"
          element={
            <DealersLayout>
              <DealersPage />
            </DealersLayout>
          }
        />
      </Routes>
    </Router>
  );
}
