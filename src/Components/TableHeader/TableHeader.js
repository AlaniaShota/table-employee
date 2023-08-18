import React from "react";
import "./TableHeader.css";

const TableHeader = () => {
  return (
      <ul className="table-main__ul">
        <li className="table-main__list ">
          <span className="table-main-list__member text">Team member</span>
          <span className="table-main-list__status text">Status</span>
          <span className="table-main-list__email text">Email Address</span>
          <span className="table-main-list__team text">Teams</span>
        </li>
      </ul>
  );
};

export default TableHeader;
