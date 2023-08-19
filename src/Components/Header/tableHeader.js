import React from "react";
import SearchEmployee from "./SearchEmployee/searchEmployee";
import AddEmployee from "./AddEmployee/addEmployee";

import "./tableHeader.css";

const TableHeader = () => {
  return (
    <div className="team-header__container">
      <h1 className="team-header__title text">Team members</h1>
      <div className="team-header__content">
        <SearchEmployee />
        <AddEmployee />
      </div>
    </div>
  );
};

export default TableHeader;
