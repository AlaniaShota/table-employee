import React from "react";
import SearchEmployee from "./SearchEmployee/searchEmployee";

import "./tableHeader.css";

const TableHeader = () => {
  return (
    <div className="team-header__container">
      <h1 className="team-header__title text">Team members</h1>
      <div className="team-header__content">
        <SearchEmployee />
        <button type="submit" className="employee-add__btn">
          <span className="text">Add user</span>
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
