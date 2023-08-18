import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import "./employeeItem.css";

const EmployeeItem = ({ name, lastName, email, status, team }) => {
  return (
    <>
      <ul className="employee__ul">
        <li className="employee-main__list">
          <span className="employee-main-list__fullName text">
            {name} {lastName}
          </span>
          <span className="employee-main-list__status text">
            {status ? "active" : "offline"}
          </span>
          <span className="employee-main-list__email text">{email}</span>
          <span className="employee-main-list__team text">{team}</span>
          <span className="employee-main-list__icon">
            <FontAwesomeIcon
              className="pen-square__icon"
              icon={faPenToSquare}
              size="lg"
            />
            <FontAwesomeIcon
              className="user-minus__icon"
              icon={faUserMinus}
              size="lg"
            />
          </span>
        </li>
      </ul>
    </>
  );
};

export default EmployeeItem;
