import React, { useContext } from "react";
import { EmployeeContext } from "../../../Context/EmployeeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchEmployee = () => {
  const [employee, setEmployee] = useContext(EmployeeContext);
  console.log(employee, "------LIST--------");

  const filterEmployee = (e) => {
    console.log(e.target.value, "target------------------");

    const firstName = employee.map((item) => item.first_name).includes();
    console.log(firstName);
  };

  return (
    <div className="search-box__container">
      <input
        type="text"
        placeholder="Search"
        className="employee_search_input text"
        onChange={filterEmployee}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchEmployee;
