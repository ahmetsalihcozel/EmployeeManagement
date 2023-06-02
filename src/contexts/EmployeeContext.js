import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EmployeeContext = createContext();

const EmployeesContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    { id: uuidv4(), name: 'Thomas Hardy', email: 'thomas hardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
    { id: uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
    { id: uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
    { id: uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
    { id: uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
  ],[]);

  useEffect(() => {
    const e = localStorage.getItem("employees")
    setEmployees(JSON.parse(e))
    console.log(JSON.parse(e))
  },[])

  useEffect(() => {
    localStorage.setItem("employees",JSON.stringify(employees))
  },[employees])

  const sortedEmployees = employees.sort((a,b) => a.name.localeCompare(b.name))

  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, {id:uuidv4(), name, email, address, phone}])
  } 

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
  }

  return (
    <EmployeeContext.Provider value={{employees, sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeesContextProvider };
