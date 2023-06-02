import { Button, Form } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({theEmployee}) => {

    const employee = theEmployee;
    const id = employee.id

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const { updateEmployee } = useContext(EmployeeContext);

    const updatedEmployee = {id, name, email, address, phone};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
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
            defaultValue={name}
            onChange={(e) => { setName(e.target.value) }}
         />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="required*" 
          required
          name="email"
          defaultValue={email}
          onChange={(e) => { setEmail(e.target.value) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="required*" 
          required 
          name="address"
          defaultValue={address}
          onChange={(e) => { setAddress(e.target.value) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="required*" 
          required
          name="phone"
          defaultValue={phone}
          onChange={(e) => { setPhone(e.target.value) }}
          />
        </Form.Group>

        <Button variant='success' type='submit'>Edit Employee</Button>
      </Form>

    )

}

export default EditForm;