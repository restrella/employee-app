import React from "react";
import EmployeeForm from "../components/EmployeeForm";

const AddEmployeePage = () => {
  const handleSubmit = (employee) => {
    console.log("from add employee page handle submit");
  };
  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployeePage;
