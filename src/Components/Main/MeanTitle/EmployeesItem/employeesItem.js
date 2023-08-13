import React, { useContext, useState, useEffect } from "react";
import EmployeeItem from "../EmployeeItem/employeeItem";
// import { EmployeeContext } from "../../../../Context/EmployeeContext";

// import data from "../../../../data";

const EmployeesItem = () => {
  const API_URL = " http://localhost:3000/employee";
  const [employees, setEmployees] = useState([]);
  // const [card, setCard] = useContext(EmployeeContext);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItem = await response.json();
        console.log(listItem);
        setEmployees(listItem);
        // console.log(setEmployees);
      } catch (err) {
        console.log(err.stack);
      }
    };

    (async () => await fetchItems())();
  }, []);

  return (
    <div className="employee-item">
      {employees.map(({ id, first_name, last_name, email, status, teams }) => (
        <EmployeeItem
          key={id}
          name={first_name}
          lastName={last_name}
          email={email}
          status={status}
          team={teams}
        />
      ))}
    </div>
  );
};

export default EmployeesItem;
