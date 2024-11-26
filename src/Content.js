import React from 'react'
import { Container, Form } from 'react-bootstrap'

const Content = () => {
  return (
    <Container>
       <Form className="d-md-none flex-grow-1 mt-2">
        <Form.Control 
          type="search"
          placeholder=" Search for Products, Brands and More"
          className="me-2 mw-6 fs-6 bg-light"
          aria-label="Search"
        ></Form.Control>
    </Form>
    </Container>
  )
}

export default Content