import React, { useState, createContext, useContext } from "react";
const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState({});

  const setValues = (values) => {
    setEmployee((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <EmployeeContext.Provider value={{ employee, setValues }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
export const useData = () => useContext(EmployeeContext);
