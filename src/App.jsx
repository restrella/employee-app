import React, { useEffect, useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { EMPLOYEES_DATA } from "./data/employees";
import { Navigate, Route, Routes } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import axios from "axios";
import * as employeeService from "./services/employee";
import EditEmployeePage from "./pages/EditEmployeePage";

const App = () => {
  return (
    <CssBaseline>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employees/new" element={<AddEmployeePage />} />
          <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
          <Route path="/employees/:id/edit" element={<EditEmployeePage />} />
        </Routes>
      </Container>
    </CssBaseline>
  );
};

export default App;
