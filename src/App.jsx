import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { EMPLOYEES_DATA } from "./data/employees";
import { Navigate, Route, Routes } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import AddEmployeePage from "./pages/AddEmployeePage";

const App = () => {
  const [employeesData, setEmployeesData] = useState(EMPLOYEES_DATA);

  const handleDeleteEmployee = (id) => {
    setEmployeesData(employeesData.filter((emp) => emp.id !== id));
  };

  return (
    <CssBaseline>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route
            path="/employees"
            element={
              <EmployeesPage
                employees={employeesData}
                onDeleteEmployee={handleDeleteEmployee}
              />
            }
          />
          <Route path="/employees/new" element={<AddEmployeePage />} />
          <Route
            path="/employees/:id"
            element={<EmployeeDetailsPage employees={employeesData} />}
          />
        </Routes>
      </Container>
    </CssBaseline>
  );
};

export default App;
