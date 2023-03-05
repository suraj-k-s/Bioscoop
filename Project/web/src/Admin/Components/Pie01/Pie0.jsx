import "./Pie01.css";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
export default function Pie0() {
  const data01 = [
    { name: "Sun Pictures", movies: 4 },
    { name: "Lyca Productions", movies: 3 },
    { name: "Pauly Jr", movies: 5 },
    { name: "Friday Films", movies: 2 },
  ];
  const data02 = [
    { name: "Hit", value: 100 },
    { name: "Flop", value: 30 },
    { name: "Blockbuster", value: 90 },
    { name: "Average", value: 130 },
    { name: "50cr Club", value: 4 },
    { name: "Super Hit", value: 100 },
    { name: "Mega Hit", value: 190 },
    { name: "Award", value: 10 },
    { name: "Watchable", value: 110 },
    { name: "Nominations", value: 102 },
    { name: "100 Days", value: 20 },
   
  
  ];
  return (
    <div className="Pie01">
        
      <span className="Pie01Title">Abbriviation Graph</span>
      
        <PieChart width={500} height={500} className="PieGraph" >
          <Pie
            data={data01}
            dataKey="movies"
            cx="40%"
            cy="40%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="40%"
            cy="40%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip/>
        </PieChart>
    </div>
 
  );
}
