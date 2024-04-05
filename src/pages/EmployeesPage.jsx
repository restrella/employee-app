import { Add } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeesTable from "../components/EmployeesTable";
import * as employeeService from "../services/employee";

const EmployeesPage = ({ onDeleteEmployee }) => {
  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    employeeService.fetchEmployees().then(({ data }) => {
      setEmployees(data);
      setLoading(false);
    });
  }, []);

  const handleDeleteEmployee = async (id) => {
    // const employeeClone = [...employees];
    // setEmployees(employees.filter((emp) => emp.id !== id));

    const employeesClone = [...employees];

    try {
      setEmployees(employees.filter((emp) => emp.id !== id));
      await employeeService.deleteEmployee(id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Data might have already been deleted");
      }
      setEmployees(employeesClone);
    }

    // employeeService.deleteEmployee(id).then(data => {

    // }).catch(error => {

    // })
  };

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <Grid container spacing={2} justifyContent="flex-end" textAlign="right">
      <Grid item xs={4}>
        <Button
          variant="text"
          startIcon={<Add />}
          LinkComponent={Link}
          to="/employees/new">
          Add Employee
        </Button>
      </Grid>
      <Grid item xs={12}>
        <EmployeesTable
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </Grid>
    </Grid>
  );
};

export default EmployeesPage;
