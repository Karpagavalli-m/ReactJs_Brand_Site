import React from 'react'
import { Card, Col } from 'react-bootstrap'

const RecentCard = ({array}) => {
  return (
    <>
    {array.map((item, idx) => (
        <Col key={idx} className='g-1 d-lg-grid' id="verticalScrollHide" sm={3}>
          <Card className='align-items-center' >
          <Card.Img variant="top" src={require(`${item.image}`)}
          id="card-image" />
            <Card.Body className='p-2'>
              <Card.Text> {item.title} </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))} 
    </>
  )
}

export default RecentCard