import EmployeeProvider from "./Context/EmployeeContext";
import TableHeader from "./Components/Header/tableHeader";
import TableMain from "./Components/Main/tableMain";

import "./App.css";

function App() {
  return (
    <>
      <EmployeeProvider>
        <EmployeeProvider>
          <TableHeader />
          <TableMain />
        </EmployeeProvider>
      </EmployeeProvider>
    </>
  );
}

export default App;
