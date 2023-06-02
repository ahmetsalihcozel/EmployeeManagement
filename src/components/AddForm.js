import { Button, Form } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext,useState } from 'react';

const AddForm = () => {


    const { addEmployee } = useContext(EmployeeContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      addEmployee(name, email, address, phone);
    }


/*  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState(""); */

    const [newEmployee, setNewEmployee] = useState({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
    

    const {name, email, address, phone} = newEmployee;

      const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
          }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            placeholder="required*"
            required 
            name="name"
            value={name}
            onChange={e => onInputChange(e)} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="required*" 
          required
          name="email"
          value={email}
          onChange={e => onInputChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="required*" 
          required 
          name="address"
          value={address}
          onChange={e => onInputChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="required*" 
          required
          name="phone"
          value={phone}
          onChange={e => onInputChange(e)}/>
        </Form.Group>

        <Button variant='success' type='submit'>Add New Employee</Button>
      </Form>

    )

}

export default AddForm;