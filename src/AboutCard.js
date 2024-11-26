import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const AboutCard = () => {
    const aboutItems=[
        { title:'About',
            subtitle:['Contact Us','About Us','Careers', 'Flipkart Stories','Press','Corporate Information']},
        { title: 'Group Companies',
            subtitle : ['Myntra','Cleartrip','Shopsy']},
        { title: 'Help' ,
            subtitle: ['Payments','Shipping','Cancellation & Returns','FAQ']},
        { title:'Cancellation Policy',
            subtitle:['Contact Us','About Us','Careers', 'Flipkart Stories','Press','Corporate Information']},
        { title: 'Registered Office Address' ,
            subtitle: ['Flipkart Internet Private Limited,  Buildings Alyssa Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,-Bengaluru, 560103, Karnataka, India','CIN: U51109KA2012PTC066107','Telephone: 044-45614700/044-67415800']}
    ]

  return (
   <Container fluid className='bg-dark g-5'>
    <Row className='bg-dark justify-content-around' >
        {aboutItems.map((item,idx)=>(
            <Col key={idx} className='g-3' md={2} xs={5}>
                <Card className=' bg-dark  text-white  align-items-center ps-4'>
                    <div className='text-start'>
                    <Card.Text className='text-secondary fw-bold'>{item.title}</Card.Text>
                    {item.subtitle.map((subitem,idx)=>(
                        <Card.Text key='idx' >{subitem}</Card.Text>
                    ))}
                    </div>
                </Card>
            </Col>
        ))}
        <Col className='g-3' md={2} xs={5}>
                <Card className=' bg-dark  text-white  align-items-center ps-4'>
                    <div className='text-start'>
                    <Card.Text className='text-secondary fw-bold'>Mail Us</Card.Text>       
                        <Card.Text >Flipkart Internet Private Limited,  Buildings Alyssa Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,-Bengaluru, 560103, Karnataka, India</Card.Text>
                    <Card.Text className='text-secondary fw-bold'>Social Media</Card.Text>
                    <Card.Text className={`d-flex justify-content-between pe-5 me-5`} id="sociamediaIcon" xs={1}>
                        <p><FaFacebook /></p>
                        <p><FaXTwitter /></p>
                        <p><FaYoutube /></p>
                    </Card.Text>
                    </div>
                    
                </Card>
            </Col>
    </Row>
   </Container>
  )
}

export default AboutCard