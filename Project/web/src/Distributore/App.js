import React from "react";
import "./App.css";
import DistributorHome from "./Components2/DistributorHome/DistributorHome";
import TopBarD from "./Components2/TopbarD/TopBarD";
import SidebarD from "./SidebarD/SidebarD";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="BodyD6">
      <TopBarD />
      <div className="containerdistributor">
      <SidebarD />
      <Routes>
      <Route path="/" element={<DistributorHome />}/>
      </Routes>
    
      </div>
    </div>
  );
}
