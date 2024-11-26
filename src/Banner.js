import React from 'react'
import {  Container } from 'react-bootstrap'
import Carosel from './Carosel'


const Banner = () => {
    const bannerImages=['./images/slide1.jpg','./images/slide2.jpg','./images/slide3.jpg','./images/slide4.png','./images/slide5.jpg','./images/slide6.jpg','./images/fashion_slide.jpg','./images/slide7.jpeg','./images/slide8.jpg']
  return (
    <Container fluid>
    <Carosel array={bannerImages} id={'banner'}></Carosel>
    </Container>

  )
}

export default Banner