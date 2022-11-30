import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Contact = () => {
 
 
  const [inputValue,setInputValue] = useState({
    fname:'',
    lname:'',
    email:'',
    number:'',
    message:''
  })
 
  console.log(inputValue);
 
   const getValue = (e) => {
 
     const {name,value} = e.target

     setInputValue(() => {
       return {
          ...inputValue,
          [name]:value
       }
     })

  }

  return (
    <>
      <div className='container'>
        <h2 className='text-center mt-4'>Contact us</h2>
        <div className='container mt-4'>
          <Form className='row mt-4 mb-5'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" name="fname" onChange={getValue} required />

            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" name="lname" onChange={getValue} required />

            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" name="email" onChange={getValue} required />

            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="Enter Number" name="number" onChange={getValue} required />

            </Form.Group>

            <Form.Group className="mb-3 col-lg-12" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" placeholder="Message....." onChange={getValue} required />
            </Form.Group>

            <div className='d-flex justify-content-center'>

              <Button variant="primary col-lg-6" type="submit">
                Submit
              </Button>
            </div>


          </Form>
        </div>
      </div>
    </>
  )
}

export default Contact
