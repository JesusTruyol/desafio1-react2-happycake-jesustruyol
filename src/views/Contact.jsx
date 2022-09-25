import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default ()=> {
  return (
    <div className='Container container-contact'>

      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      
      <Form className='container-form'>
      <Form.Group className="form-email mb-3">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="form-description mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Button className='btn-form mx-auto' type="submit">Enviar</Button>
    </Form>
    
    </div>
  )
}
