import React, { useEffect, useState } from "react";
import * as employeeService from "../services/employee";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

const EditEmployeePage = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    employeeService.fetchEmployeeById(params.id).then(({ data }) => {
      setEmployee(data); // response => response.data
      setLoading(false);
    });
  }, [params.id]);

  const handleSumit = (form) => {
    employeeService
      .updateEmployee(employee.id, form)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.employee);
        }
      });
  };

  const handleSubmit = (form) => {
    employeeService
      .updateEmployee(employee.id, form)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data === 404) {
          alert(error.response.data.message[0]);
        }
      });
  };

  if (loading) {
    return <h1></h1>;
  }

  if (employee) {
    return (
      <div>
        <EmployeeForm
          initialValue={{
            name: employee.name,
            username: employee.username,
            email: employee.email,
            phone: employee.phone || "",
            address: employee.address,
            website: employee.website,
          }}
          onSubmit={handleSubmit}></EmployeeForm>
      </div>
    );
  }
  return <div>EditEmployeePage</div>;
};

export default EditEmployeePage;
