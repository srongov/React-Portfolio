import React from 'react';
import { Form, Button, } from 'react-bootstrap';

export const Contact = () => {
  return (
    <div>
<Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>First name</Form.Label>
    <Form.Control placeholder="Enter First Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Subject</Form.Label>
    <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" size="lg">
      Submit
    </Button>{' '}
      </Form>
      <div className='cfooter'>
      <h5 className='footerdiv'><a href="https://github.com/srongov">My Github</a></h5>
      </div>
    </div>
  )
}
