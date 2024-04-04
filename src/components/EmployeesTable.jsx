import { ArrowForward, Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EmployeesTable = ({ employees, onDeleteEmployee }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {emp.name}
              </TableCell>
              <TableCell>{emp.username}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>
                <Link to={`/employees/${emp.id}`}>
                  <IconButton color="primary">
                    <ArrowForward />
                  </IconButton>
                </Link>
                <Link to={`/employees/${emp.id}/edit`}>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </Link>
                <IconButton
                  onClick={() => onDeleteEmployee(emp.id)}
                  color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
