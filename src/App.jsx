import React, { useState } from "react";
import EmployeesTable from "./components/EmployeesTable";
import { CssBaseline } from "@mui/material";
import { EMPLOYEES_DATA } from "./data/employees";

const App = () => {
  const [employeesData, setEmployeesData] = useState(EMPLOYEES_DATA);

  const handleDeleteEmployee = (id) => {
    setEmployeesData(employeesData.filter((emp) => emp.id !== id));
  };

  return (
    <CssBaseline>
      <EmployeesTable
        onDeleteEmployee={handleDeleteEmployee}
        employees={employeesData}
      />
    </CssBaseline>
  );
};

export default App;
