import "./WidgetLg1.css";
import d1 from "../../../../assets/images/d1.jpg";
import d2 from "../../../../assets/images/d2.jpg";
import d3 from "../../../../assets/images/d3.jpg";
import d4 from "../../../../assets/images/d4.jpg";
import d5 from "../../../../assets/images/d5.jpg";
import d6 from "../../../../assets/images/d6.jpg";
import d7 from "../../../../assets/images/d7.jpg";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton1   " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg1">
      <h3 className="widgetLgTitle1">Latest Transactions</h3>
      <table className="widgetLgTable1">
        <tr className="widgetLgTr1">
          <th className="widgetLgTh1">Distributor</th>
          <th className="widgetLgTh1">Date Of Transaction</th>
          <th className="widgetLgTh1">Amount</th>
          <th className="widgetLgTh1">Status</th>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d1} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">Prithviraj Sukumaran</span>
          </td>
          <td className="widgwtLgDate1">2 Jan 2022</td>
          <td className="widgwtLgAmount1">₹20000000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d2} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">E4 Entertaiments</span>
          </td>
          <td className="widgwtLgDate1">14 Jan 2022</td>
          <td className="widgwtLgAmount1">₹21000000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d3} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">Antony Perumbavoor</span>
          </td>
          <td className="widgwtLgDate1">30 Jan 2022</td>
          <td className="widgwtLgAmount1">₹30000000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d4} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">Tommichan Mulakupadam</span>
          </td>
          <td className="widgwtLgDate1">1 Feb 2022</td>
          <td className="widgwtLgAmount1">₹2600000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d5} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">Yash Raj Films</span>
          </td>
          <td className="widgwtLgDate1">1 Feb 2022</td>
          <td className="widgwtLgAmount1">₹3600000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d6} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">Lyca Productions</span>
          </td>
          <td className="widgwtLgDate1">5 Feb 2022</td>
          <td className="widgwtLgAmount1">₹2500000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser1">
            <img src={d7} alt="" className="widgetLgImg1" />
            <span className="widgetLgName1">Sun Pictures</span>
          </td>
          <td className="widgwtLgDate1">6 Feb 2022</td>
          <td className="widgwtLgAmount1">₹2600000</td>
          <td className="widgwtLgStatus1">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
