import React, { useState } from "react";
export const EmployeeContext = React.createContext([]);

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);

  return (
    <EmployeeContext.Provider value={[employee, setEmployee]}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
