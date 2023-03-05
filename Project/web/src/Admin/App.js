import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./app.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics/Analytics";
import Distribution from "./Pages/Distribution/Transaction";
import Producer from "./Pages/Producer/Producer";
import Distributor from "./Pages/Distributor/Distributor";
import Movies from "./Pages/Movies/Movies";
import Report from "./Pages/Report/Report";
import Pie0 from "./Components/Pie01/Pie0";
import ProducerRequest from "./Pages/ProducerRequest/ProducerRequest";
import DistributorRequest from "./Pages/DistributorRequest/DistributorRequest";
import District from "./Pages/District/District";
import Place from "./Pages/Place/Place";
import Genre from "./Pages/Genre/Genre";
import Platform from "./Pages/Platform/Platform";
import Percentage from "./Pages/Percentage/Percentage";
// import { Place } from "@mui/icons-material";

export default function App() {
  return (
    <div className="body6">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Analytics" element={<Analytics />}/>
          <Route path="/Transactions" element={<Distribution/>}/>
          <Route path="/Producer" element={<Producer/>}/>
          <Route path="/Distributor" element={<Distributor/>}/>
          <Route path="/Movies" element={<Movies type="movie"/>}/>
          <Route path="/Reports" element={<Report/>}/>
          <Route path="/PieChart1" element={<pieChart1/>}/>
          <Route path="/piee" element={<Pie0/>}/>
          <Route path="/ProducerRequest" element={<ProducerRequest/>}/>
          <Route path="/DistributorRequest" element={<DistributorRequest/>}/>
          <Route path="/District" element={<District/>}/>
          <Route path="/Place" element={<Place/>}/>
          <Route path="/Genre" element={<Genre/>}/>
          <Route path="/Platform" element={<Platform/>}/>
          <Route path="/Percentage" element={<Percentage/>}/>
         
        </Routes>
      </div>
    </div>
  );
}
