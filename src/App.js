import EmployeeList from './components/EmployeeList';
import { EmployeesContextProvider } from './contexts/EmployeeContext';

function App() {
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeesContextProvider value={{EmployeeList}}>
              <EmployeeList />
            </EmployeesContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
