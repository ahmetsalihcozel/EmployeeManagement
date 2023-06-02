import { useContext,useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from "./EditForm";
import { OverlayTrigger, Tooltip } from "react-bootstrap";



const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [employee])


    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td style={{display:"flex"}}>
            <OverlayTrigger
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        Edit
                    </Tooltip>
                }
            >
                <div>
                    <a onClick={handleShow} href="#editEmployeeModal" className="btn text-warning btn-act" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                </div>
            </OverlayTrigger>
            <OverlayTrigger
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        Delete
                    </Tooltip>
                }
            >
                <div >
                    <a onClick={() => deleteEmployee(employee.id)} href="#deleteEmployeeModal" className="btn text-danger btn-act" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </a>
                </div>
            </OverlayTrigger>
        </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>
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
    )
}

export default Employee;