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
    })
    .catch(error => {
        console.log(error)
        if(error.response && error.response.status === 400) {
            alert(error.response.data.message[0])
        }

        if(error && error.code === 'ERR_NETWORK') {
            alert(error.message)
        }
    });
  };

  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployeePage;
