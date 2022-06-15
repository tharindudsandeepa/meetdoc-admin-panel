
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './table.css';


const List = () => {
  const rows = [
    {
      id: 1143155,
      medicalcenter: "Medihelp Center",
      customer: "P.S Samarathunga",
      date: "15/07/22",
      amount: 5000,
    },
    {
      id: 1143154,
      medicalcenter: "MDK Hospital",
      customer: "A.D.D Silva",
      date: "15/07/22",
      amount: 9000,
    },
    {
      id: 1143153,
      medicalcenter: "Digasiri Medical Center",
      customer: "H Abeysingha",
      date: "14/07/22",
      amount: 11400,
    },
    {
      id: 1143152,
      medicalcenter: "Nawaloka Hospital",
      customer: "Mervin Dissanayaka",
      date: "14/07/22",
      amount: 10920,
    },
    {
      id: 1143151,
      medicalcenter: "Asiri Hospital",
      customer: "Chathura Perera",
      date: "14/07/22",
      amount: 12000,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650,margin:"10px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"#23236E",fontWeight:"700",fontSize:"16px"}} className="tableCellhead">Transaction ID</TableCell>
            <TableCell sx={{color:"#23236E",fontWeight:"700",fontSize:"16px"}} className="tableCellhead">Medical Center</TableCell>
            <TableCell sx={{color:"#23236E",fontWeight:"700",fontSize:"16px"}} className="tableCellhead">Customer</TableCell>
            <TableCell sx={{color:"#23236E",fontWeight:"700",fontSize:"16px"}} className="tableCellhead">Date</TableCell>
            <TableCell sx={{color:"#23236E",fontWeight:"700",fontSize:"16px"}} className="tableCellhead">Amount(Rs.)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{color:"#3A3939",fontWeight:"600",fontSize:"15px"}} className="tableCell">{row.id}</TableCell>
              <TableCell sx={{color:"#3A3939",fontWeight:"600",fontSize:"15px"}} className="tableCell">{row.medicalcenter}</TableCell>
              <TableCell sx={{color:"#3A3939",fontWeight:"600",fontSize:"15px"}} className="tableCell">{row.customer}</TableCell>
              <TableCell sx={{color:"#3A3939",fontWeight:"600",fontSize:"15px"}} className="tableCell">{row.date}</TableCell>
              <TableCell sx={{color:"#3A3939",fontWeight:"600",fontSize:"15px"}} className="tableCell">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;