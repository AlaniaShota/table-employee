import EmployeeProvider from "./Context/EmployeeContext";
import Employees from "./Components/Employees/Employees";

import "./App.css";

function App() {
  return (
    <>
      <EmployeeProvider>
        <EmployeeProvider>
          <Employees/>
        </EmployeeProvider>
      </EmployeeProvider>
    </>
  );
}

export default App;
