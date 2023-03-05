import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./Guest/App";
import App1 from "./Admin/App";
import App2 from "./Producer/App";
import App3 from "./Distributore/App";

export default function app() {
  return (
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/Distributore/*" element={<App3 />} />
      <Route path="/Producer/*" element={<App2 />} />
      <Route path="/Admin/*" element={<App1 />} />
    </Routes>
  );
}
