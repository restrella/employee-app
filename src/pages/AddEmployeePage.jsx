import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import * as employeeService from "../services/employee";
import { useNavigate } from "react-router-dom";

const AddEmployeePage = () => {
  const navigate = useNavigate();
  const handleSubmit = (employee) => {
    console.log("from add employee page handle submit");
    employeeService.addEmployee(employee).then((response) => {
      navigate("/");
    });
  };

  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployeePage;
