import React from "react";
import AddEmployee from "./AddEmployee/addEmployee";

import "./tableHeader.css";

const TableHeader = () => {
  return (
    <div className="team-header__container">
      <h1 className="team-header__title text">Team members</h1>
        <AddEmployee />
    </div>
  );
};

export default TableHeader;
