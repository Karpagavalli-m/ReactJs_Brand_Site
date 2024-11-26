import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({item}) => {
  return (
    <Card className='align-items-center text-center' style={{ cursor: 'pointer'}}>
          <Card.Img variant="top" src={require(`${item.image}`)}
          id="card-image" />
            <Card.Body id="cardbody" className='d-grid pe-1 align-items-center'>
              <Card.Text className='fw-semibold m-0' >
                {item.title}
              </Card.Text>
            <Card.Text className={'text-success fw-bold m-0'}>
                {item.subtitle}
              </Card.Text>
            </Card.Body>
          </Card>
  )
}

export default Cards