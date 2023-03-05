import "./Producer.css";
import { DataGrid } from "@material-ui/data-grid";
import p1 from "../../../assets/images/p1.jpg";
import p2 from "../../../assets/images/p2.jpg";
import p3 from "../../../assets/images/p3.jpg";
import p4 from "../../../assets/images/p4.jpg";
import p5 from "../../../assets/images/p5.jpg";
import d1 from "../../../assets/images/d1.jpg";
import d2 from "../../../assets/images/d2.jpg";
import d3 from "../../../assets/images/d3.jpg";
import d4 from "../../../assets/images/d4.jpg";
import d5 from "../../../assets/images/d5.jpg";
import { DeleteOutlineSharp } from "@mui/icons-material";
export default function Producer() {
 
  const rows = [
    
    {
      id: 1,
      producername: "Prithviraj Sukumaran",
      avatar: d1,
      email: "prithvirajsukumaran@gmail.com",
      dateofjoining: "1 Mar 2019",
      totalmovies: 5,
      action: DeleteOutlineSharp,
    },
    {
      id: 2,
      producername: "E4 Entertaiments",
      avatar: d2,
      email: "e4entertaimenst@gmail.com",
      dateofjoining: "2 Feb 2020",
      totalmovies: 4,
    },
    {
      id: 3,
      producername: "Antony Perumbavoor",
      avatar: d3,
      email: "antonyperumbavoor@gmail.com",
      dateofjoining: "5 Feb 2020",
      totalmovies: 2,
    },
    {
      id: 4,
      producername: "Tommichan Mulakupadam",
      avatar: d4,
      email: "tommichamulakupadam@gmail.com",
      dateofjoining: "9 Feb 2021",
      totalmovies: 1,
    },
    {
      id: 5,
      producername: "Yash Raj Films",
      avatar: d5,
      email: "yashrajfilms@gmail.com",
      dateofjoining: " 24 Dec 2021",
      totalmovies: 2,
    },
    {
      id: 6,
      producername: "Vijay Babu",
      avatar: p1,
      email: "vijaybabu@gmail.com",
      dateofjoining: "1 Feb 2019",
      totalmovies: 5,
    },
    {
      id: 7,
      producername: "Anwar Rasheed",
      avatar: p2,
      email: "anwarrasheed@gmail.com",
      dateofjoining: "4 Feb 2019",
      totalmovies: 8,
    },
    {
      id: 8,
      producername: "Dulquer Salmaan",
      avatar: p3,
      email: "dulquersalman@gmail.com",
      dateofjoining: "6 Feb 2019",
      totalmovies: 6,
    },
    {
      id: 9,
      producername: "Manniyanpilla Raju",
      avatar: p4,
      email: "manniyanpilla@gmail.com",
      dateofjoining: "8 Feb 2019",
      totalmovies: 7,
    },
    {
      id: 10,
      producername: "Nivin Pauly",
      avatar: p5,
      email: "nivinpauly@gmail.com",
      dateofjoining: "28 Feb 2019",
      totalmovies: 5,
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    {
      field: "producername",
      headerName: "Producer Name",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="ProducerImg">
            <img
              className="ProducerImage"
              src={params.row.avatar}
              alt={params.row.avatar}
            />
            {params.row.producername}
          </div>
        );
      },
    
    },
    { field: "dateofjoining", headerName: "Date of Joining", width: 180 },
    { field: "email",
     headerName: "Email",
      width: 220 ,
      renderCell: (cellValues) => {
        return(
          <div style={{
            color:"white"
          }}>
{cellValues.value}
          </div>
        )
      }
      
    },
    {
      field: "totalmovies",
      headerName: "Total Movies",
      type: "number",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <div className="ProducerImg">
            <DeleteOutlineSharp />
          </div>
        );
      },
    },
  ];

  return (
    <div className="Producer">
      <DataGrid
    
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  
    </div>
  );
}
