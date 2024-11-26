import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({item}) => {
  return (
    <Card className='align-items-center text-center' style={{ cursor: 'pointer'}}>
          <Card.Img variant="top" src={require(`${item.image}`)}
          id="card-image"/>
            <Card.Body >
              <Card.Text className='fw-semibold' >
                {item.title}
              </Card.Text>
            <Card.Title className={'text-success fw-bold'}>
                {item.subtitle}
              </Card.Title>
            </Card.Body>
          </Card>
  )
}

export default Cards