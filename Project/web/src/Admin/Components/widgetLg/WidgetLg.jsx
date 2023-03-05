import "./widgetLg.css";
import d1 from "../../../assets/images/d1.jpg";
import d2 from "../../../assets/images/d2.jpg";
import d3 from "../../../assets/images/d3.jpg";
import d4 from "../../../assets/images/d4.jpg";
import d5 from "../../../assets/images/d5.jpg";
import d6 from "../../../assets/images/d6.jpg";
import d7 from "../../../assets/images/d7.jpg";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton   " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Distributor</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d1} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Prithviraj Sukumaran</span>
          </td>
          <td className="widgwtLgDate">2 Jan 2022</td>
          <td className="widgwtLgAmount">₹20000000</td>
          <td className="widgwtLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d2} alt="" className="widgetLgImg" />
            <span className="widgetLgName">E4 Entertaiments</span>
          </td>
          <td className="widgwtLgDate">14 Jan 2022</td>
          <td className="widgwtLgAmount">₹21000000</td>
          <td className="widgwtLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d3} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Antony Perumbavoor</span>
          </td>
          <td className="widgwtLgDate">30 Jan 2022</td>
          <td className="widgwtLgAmount">₹30000000</td>
          <td className="widgwtLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d4} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Tommichan Mulakupadam</span>
          </td>
          <td className="widgwtLgDate">1 Feb 2022</td>
          <td className="widgwtLgAmount">₹2600000</td>
          <td className="widgwtLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d5} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Yash Raj Films</span>
          </td>
          <td className="widgwtLgDate">1 Feb 2022</td>
          <td className="widgwtLgAmount">₹3600000</td>
          <td className="widgwtLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d6} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Lyca Productions</span>
          </td>
          <td className="widgwtLgDate">5 Feb 2022</td>
          <td className="widgwtLgAmount">₹2500000</td>
          <td className="widgwtLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={d7} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Sun Pictures</span>
          </td>
          <td className="widgwtLgDate">6 Feb 2022</td>
          <td className="widgwtLgAmount">₹2600000</td>
          <td className="widgwtLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
