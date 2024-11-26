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
   <Container fluid className='bg-dark g-1'>
    <Row className='bg-dark justify-content-around' md={3} xs={1} sm={2} lg={6}>
        {aboutItems.map((item,idx)=>(
            <Col key={idx} className='g-3 ' >
                <Card className='bg-dark  text-white ps-3 '>   
                    <Card.Text className='text-secondary fw-bold'>{item.title}</Card.Text>
                    {item.subtitle.map((subitem,idx)=>(
                        <Card.Text key='idx' >{subitem}</Card.Text>
                    ))}
                   
                </Card>
            </Col>
        ))}
        <Col className='g-3' >
                <Card className=' bg-dark  text-white   ps-3 text-start'>                  
                    <Card.Text className='text-secondary fw-bold'>Mail Us</Card.Text>       
                        <Card.Text >Flipkart Internet Private Limited,  Buildings Alyssa Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,-Bengaluru, 560103, Karnataka, India</Card.Text>
                    <Card.Text className='text-secondary fw-bold'>Social Media</Card.Text>
                    <Card.Text className={`d-flex justify-content-around w-50`} id="socialmediaIcon"  xs={1}>
                        <p><FaFacebook /></p>
                        <p><FaXTwitter /></p>
                        <p><FaYoutube /></p>
                    </Card.Text>
                  
                    
                </Card>
            </Col>
    </Row>
   </Container>
  )
}

export default AboutCard