import React from 'react'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap'

const VertialScroll = () => {
    
    const images=[{image:'./images/catagories.jpg',title:'All Catagories'},
        {image:'./images/offer.jpg',title:'Offer Zone'},
        {image:'./images/grocery.jpg',title:'Grocery'},
        {image:'./images/Fashion.png',title:'Fashion'},
        {image:'./images/mobile.png',title:'Mobile'},
        {image:'./images/laptop2.png',title:'Laptop'},
        {image:'./images/cosmetics.png',title:'Cosmetics'},
        {image:'./images/smart.png',title:'Smart Gadgets'},
        {image:'./images/furniture.png',title:'Furniture'},
        {image:'./images/toy.png',title:'Toys'},
        {image:'./images/gits.png',title:'Gits'}
    ]

  return (

    <Container className='d-flex overflow-x-auto mt-3 p-3   bg-light' fluid>  
    <Stack direction="horizontal" gap={{md:3}} className='m-auto'>  
    
    {images.map((item,ind)=>(
    
       <Card key={ind}  border="light" className={`
          p-2  d-md-${((ind===0 || ind===1 || ind===images.length-1)?"none":"flex")}`} style={{ cursor: 'pointer'}}>
       <Card.Img id="verticalImage" variant="top" src={require(`${item.image}`)} />
       <Card.Body >  
         <Card.Text className='w-100 fw-bold pt-2 fs-6 text-center' id='Ctext'>
         {item.title}
         </Card.Text> 
           
       </Card.Body>
     </Card>
))}
    
 </Stack>  
 </Container>  
  )
}

export default VertialScroll