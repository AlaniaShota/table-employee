import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AddForm from "./AddForm/addForm";

import "./addEmployee.css";

const AddEmployee = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <button
        type="submit"
        className="employee-add__btn"
        onClick={() => setShowButton(!showButton)}
      >
        <span className="text">{showButton ? "hide" : "Add User"}</span>
      </button>
      <div>
        <CSSTransition
          in={showButton}
          timeout={2000}
          classNames="modal"
          mountOnEnter
          unmountOnExit
        >
          <AddForm className="modal" />
        </CSSTransition>
      </div>
    </>
  );
};

export default AddEmployee;
