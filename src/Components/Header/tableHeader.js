import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./tableHeader.css";

const TableHeader = () => {
  return (
    <div className="team-header__container">
      <h1 className="team-header__title text">Team members</h1>
      <div className="team-header__content">
        <div className="search-box__container">
          <input
            type="text"
            placeholder="Search"
            className="employee_search_input text"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <button type="submit" className="employee-add__btn">
          <span className="text">Add user</span>
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
