import React from "react";
import "./EmployeesTable.css";
import TableHeader from "../TableHeader/TableHeader";
import EmployeesList from "../EmployeesList/employeesList";

const EmployeesTable= () => {
  return (
    <div className="table-main__container">
      <TableHeader />
      <EmployeesList />
    </div>
  );
};

export default EmployeesTable;
