// import React, { useContext, useEffect } from "react";
// import { useData } from "../../Context/EmployeeContext";
// // import EmployeeItem from "../EmployeeItem/EmployeeItem";
// // import { EmployeeContext } from "../../Context/EmployeeContext";

// const EmployeesList = () => {
//   const API_URL = " http://localhost:3000/employee";

//   const {employee} = useData()
//   console.log(employee);
//   // const { employee, setEmployee } = useContext(EmployeeContext);

//   // useEffect(() => {
//   //   const fetchItems = async () => {
//   //     try {
//   //       const response = await fetch(API_URL);
//   //       const listItem = await response.json();
//   //       setEmployee(listItem);
//   //     } catch (err) {
//   //       console.log(err.stack);
//   //     }
//   //   };

//   //   (async () => await fetchItems())();
//   // }, [setEmployee]);

//   return (
//     <div className="employee-item">
//       {/* {employee.map(({ id, first_name, last_name, email, status, teams }) => (
//         <EmployeeItem
//           key={id}
//           name={first_name}
//           lastName={last_name}
//           email={email}
//           status={status}
//           team={teams}
//         />
//       ))} */}
//     </div>
//   );
// };

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useData } from "../../Context/EmployeeContext";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const EmployeesList = ({ ...props }) => {
  const { employee } = useData();
  const entries = Object.entries(employee).filter(
    (entry) => entry[0] !== "files"
  );
  const { files } = employee;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        {...props}
      >
        {entries.map}
      </DataGrid>
    </div>
  );
};

export default EmployeesList;
