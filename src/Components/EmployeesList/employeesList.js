import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { EmployeeContext } from "../../Context/EmployeeContext";

import "./EmployeesTable.css";

const EmployeesList = () => {
  const { employee } = useContext(EmployeeContext);

  const columns = [
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "teams", headerName: "Teams", width: 230 },
    { field: "salary", headerName: "Salary", width: 170 },
    { field: "currency", headerName: "Currency", width: 120 },
  ];

  return (
    <div className="table-main__container">
      <DataGrid
        rows={employee}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[8, 20]}
        // checkboxSelection
      />
    </div>
  );
};

export default EmployeesList;
