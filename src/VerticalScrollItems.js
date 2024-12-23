import React from 'react'
import { Card, Col, Container, Stack } from 'react-bootstrap'

const VerticalScrollItems = ({array}) => {
  return (
    <Container className='d-flex d-lg-none overflow-x-auto bg-light' fluid>  
    <Stack direction='horizontal' className='d-lg-none mb-3'>
      {array.map((item, idx) => (
        <Col key={idx} className='p-1' xs={4} sm={5}>
          <Card className='d-grid align-items-center text-center' >
          <Card.Img variant="top" src={require(`${item.image}`)}
          id="card-image" />
            <Card.Body className='p-1 fs-6 d-grid align-items-center '>
            <Card.Text id="SquareCardText" > {item.title} </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}   
        </Stack>
    </Container>
  )
}

export default VerticalScrollItems