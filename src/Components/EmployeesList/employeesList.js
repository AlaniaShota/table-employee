import React, { useContext, useEffect } from "react";
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import { EmployeeContext } from "../../Context/EmployeeContext";

const EmployeesList = () => {
  const API_URL = " http://localhost:3000/employee";
  const [employee, setEmployee] = useContext(EmployeeContext);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItem = await response.json();
        setEmployee(listItem);
      } catch (err) {
        console.log(err.stack);
      }
    };

    (async () => await fetchItems())();
  }, [setEmployee]);

  return (
    <div className="employee-item">
      {employee.map(({ id, first_name, last_name, email, status, teams }) => (
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

export default EmployeesList;
