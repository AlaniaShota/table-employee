import React, { useState, createContext, useEffect } from "react";
export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const URL_API = "http://localhost:3001/employee";

  const fetchData = async () => {
    try {
      const response = await fetch(URL_API);
      const json = await response.json();
      setEmployee(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewItem = async (newItem) => {
    try {
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error("Failed to add item");
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const contextValue = {
    employee,
    addNewItem,
  };

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
