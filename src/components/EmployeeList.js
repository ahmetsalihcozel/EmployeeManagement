import { useContext,useState, useEffect } from "react";
import Employee from "./Employee";
import { EmployeeContext } from '../contexts/EmployeeContext'
import { Alert, Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();

        setShowAlert(true);
        const timer = setTimeout(() => {
            setShowAlert(false);
          }, 2000);
      
          return () => clearTimeout(timer);

    }, [employees])

    useEffect(() => {
        setShowAlert(false);
    },[])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(employees.length / employeesPerPage);


    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button href="#addEmployeeModal" className="btn btn-success" data-toggle="modal" onClick={handleShow}><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
            <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Employee data has been updated</Alert.Heading>
            </Alert>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee}/>
                            </tr>
                        ))   
                    }
                </tbody>
            </table>
            <Pagination page = {totalPagesNum} setCurrentPage = {setCurrentPage} showing = {currentEmployees.length} quantityEmployees = {employees.length}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddForm/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
};

export default EmployeeList;
