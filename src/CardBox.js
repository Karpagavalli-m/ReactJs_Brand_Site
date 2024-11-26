import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import Cards from './Cards'

const CardBox = () => {
    const dress=[{image:"./images/dress1.jpeg",title:"Women tops", subtitle:"Under 600"},
        {image:'./images/dress2.jpeg',title:"Mens shirts", subtitle:"Min. 40% Off"},
        {image:'./images/dress3.jpeg',title:"Kids dress", subtitle:"From 500"},
        {image:'./images/dress4.jpeg',title:"Sarees", subtitle:"Under 800"}
    ]
    const decor=[{image:"./images/decor1.jpeg",title:"Decor Lights", subtitle:"Under 700"},
        {image:"./images/decor2.jpeg",title:"Clock", subtitle:"From 900"},
        {image:"./images/decor3.jpeg",title:"Cushions", subtitle:"From 600"},
        {image:"./images/decor4.jpeg",title:"Furnitures", subtitle:"Upto 40% Off"}
    ]
    const gadget=[{image:"./images/gadget1.jpeg",title:"Smart watches", subtitle:`From 1000`},
        {image:"./images/gadget2.jpeg",title:"Digital clock", subtitle:"Min. 60% Off"},
        {image:"./images/gadget3.jpeg",title:"Airpods", subtitle:"Min. 40% Off"},
        {image:"./images/gadget4.jpeg",title:"Bluetooth speakers", subtitle:"From 1500"}
    ]
  return (
    <Container fluid className='mt-3 bg-white'>
        <Row xs={1} md={3} className='g-3  d-flex justify-content-evenly'>
        <Col className='border rounded p-3' lg={4}>
        <div className='d-flex justify-content-between'>
        <h4 className='d-inline'>Best Gadgets & Appliances</h4>
        <h4 className='d-inline text-primary'><IoIosArrowDroprightCircle  /></h4>
        </div>
        
       <Row xs={2} lg={2} className="justify-content-center">
      {gadget.map((item, idx) => (
        <Col key={idx} className='g-3' >
          <Cards item={item} id="Card" />
        </Col>
      ))}   
    </Row>
    </Col>
    <Col className='border rounded p-3' lg={'auto'}>
        <div className='d-flex justify-content-between'>
        <h4 className='d-inline'>Home Decors and Furnishings</h4>
        <h4 className='d-inline text-primary'><IoIosArrowDroprightCircle  /></h4>
        </div>
       <Row xs={2} md={2}  > 
      {decor.map((item, idx) => (
        <Col key={idx} className='g-3'>
          <Cards item={item} />
        </Col>
      ))}   
    </Row>
    </Col>
    <Col className='border rounded p-3' lg={3}>
    <div className='d-flex justify-content-between'>
        <h4 className='d-inline'>Fashion's Top Deals</h4>
        <h4 className='d-inline text-primary'><IoIosArrowDroprightCircle  /></h4>
        </div>
       <Row xs={2} md={2} className="justify-content-center">
      {dress.map((item, idx) => (
        <Col key={idx} className='g-3 text-center'>
          <Cards item={item} />
        </Col>
      ))}   
    </Row>
    </Col>

    </Row>
    </Container>
  )
}

export default CardBox