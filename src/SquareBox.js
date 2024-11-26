import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'

import VerticalScrollItems from './VerticalScrollItems'
import Carosel from './Carosel'
import RecentCard from './RecentCard'
import ItemsHeader from './ItemsHeader'

const SquareBox = () => {
    const dress=[{image:"./images/dress1.jpeg"},
        {image:'./images/dress2.jpeg'},
        {image:'./images/dress3.jpeg'},
        {image:'./images/dress4.jpeg'}
    ]
    const decor=[{image:"./images/decor1.jpeg"},
        {image:"./images/decor2.jpeg"},
        {image:"./images/decor3.jpeg"},
        {image:"./images/decor4.jpeg"}
    ]
    const gadget=[{image:"./images/gadget1.jpeg"},
        {image:"./images/gadget2.jpeg"},
        {image:"./images/gadget3.jpeg"},
        {image:"./images/gadget4.jpeg"}
    ]
    const recent=[{image:"./images/recent1.jpeg",title:'Tops'},
        {image:"./images/recent2.jpeg",title:'Bags'},
        {image:"./images/recent3.jpeg",title:'Toys'},
        {image:"./images/recent4.jpeg",title:'Lights'}
    ]
    const deals=[{image:"./images/deal1.jpeg",title:'Sports Shoes'},
        {image:"./images/deal2.jpeg",title:'Lakme cosmetics'},
        {image:"./images/deal3.jpeg",title:'Mobile phones'},
        {image:"./images/deal4.jpeg",title:'Winter wear'}
    ]

    const sponserImages=['./images/sponser2.jpeg','./images/sponser1.jpeg','./images/sponser3.jpeg','./images/sponser4.jpeg']
  return (
    <Container fluid className='d-flex mt-3'>
        <Row sm xs={1} lg={1} 
        className=' g-1 d-flex justify-content-evenly' >
        <Col className='border rounded p-3' lg={3}> 
        <ItemsHeader title={'Recent viewed Items'}/>  
        <Row lg={2} className="d-flex overflow-x-auto justify-content-center">
        <VerticalScrollItems array={recent} />
        <RecentCard array={recent} /> 
        </Row>
    </Col>
    <Col className='border rounded p-3' lg={3}>
       <ItemsHeader title={'Top Deals'}/>
       <Row lg={2}  className="d-flex overflow-x-auto justify-content-center"> 
       <VerticalScrollItems array={deals} />
       <RecentCard array={deals} />
    </Row>
    </Col>
    <Col className='border rounded pt-3 ps-2' lg={5}>
    <ItemsHeader title={'Sponsored'}  />
       <Container className='p-0'>
        <Carosel array={sponserImages} id={'sponserImage'} />
      </Container>
    </Col>

    </Row>
    </Container>
  )
}

export default SquareBox