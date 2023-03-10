import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export default function Chart({title, data, dataKey, grid}) {

 
     
  return (<div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#a6ff00"/>
          <Line type="monotone" dataKey={dataKey} stroke="#a6ff00"/>
          <Tooltip/>
          {grid && <CartesianGrid stroke="#800080" strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
     
      </div>
  );
}
