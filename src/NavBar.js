import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBell, FaRegUserCircle, FaUser } from "react-icons/fa";
import { BsCart3, BsCashCoin, BsFillCartPlusFill, BsFillGrid3X3GapFill, BsGridFill, BsShop, BsSuitcaseLgFill } from "react-icons/bs";
import { TbLanguageHiragana } from 'react-icons/tb';
import { BiSolidCoupon, BiSolidOffer } from 'react-icons/bi';
import { FaRectangleList } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import Image from 'react-bootstrap/Image';
import {  Form } from 'react-bootstrap';
import { CgMoreVertical } from 'react-icons/cg';


function NavBar() {
    const expand=false;
  return (
    <Navbar expand={expand}> 
      <Container className='justify-content-between bg-white w-100' fluid='lg'>
        <div>
      <Navbar.Toggle className='d-md-none p-0' inline/>
            <Navbar.Offcanvas className='d-md-none w-75'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"

               >
              <Offcanvas.Header className='bg-primary text-white'closeButton>
                
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}
                className='d-flex align-content-center justify-content-between  w-100 pe-3'>
                  <div>
                    <FaUser className=''/>
                  <span className=''>Welcome!</span>
                  </div>
                  <img src={require('./images/Flipkart_logo2.png')}   alt="Brand Logo" className='bg-success ' />
                  
                </Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body className='p-0'>
                <Nav>
                <Nav.Link  href="#action1" className="pt-4" ><BsCashCoin id="icon"  />SuperCoin Zone</Nav.Link>
                  <Nav.Link href="#action2" className="pb-0"><BsFillCartPlusFill id="icon"  />Flipcart Plus Zone</Nav.Link>
                    <hr />
                    <Nav.Link className="pt-0"  href="#action1"><BsGridFill id="icon"  />Catagories</Nav.Link>
                    <Nav.Link  className="pb-0" href="#action2"><BsFillGrid3X3GapFill id="icon"  />More on Flipkart</Nav.Link>
                    <hr />
                    <Nav.Link  className="p-0" href="#action1"><TbLanguageHiragana  id="icon"  />Choose Language</Nav.Link>
                    <hr />
                  <Nav.Link href="#action2" className="pt-0"><BiSolidOffer id="icon"  />Offer Zone</Nav.Link>
                  <Nav.Link  href="#action1" className="pb-0"><BsSuitcaseLgFill id="icon"  />Sell on Flipkart</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2" className="pt-0"><FaRectangleList id="icon"  />My Orders</Nav.Link>
                  <Nav.Link 
                  
                  href="#action2"><BiSolidCoupon id="icon"  />Coupons</Nav.Link>
                  <Nav.Link  href="#action1"><BsSuitcaseLgFill id="icon"  />My Cart</Nav.Link>
                  <Nav.Link href="#action2"><MdFavorite id="icon"  />My Wishlist</Nav.Link>
                  <Nav.Link href="#action2"><FaUser id="icon"  />My Account</Nav.Link>
                  <Nav.Link  href="#action1" className="pb-0"><FaBell id="icon"  />My Notifications</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2" id="navText">Notifications Preferences</Nav.Link>
                  <Nav.Link  href="#action1" id="navText">Help Center</Nav.Link>
                  <Nav.Link href="#action2" id="navText">Legal</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            
                
               
            
        <Navbar.Brand href="#home" >
        <Image src={require("./images/Flipkart-11.png") }    
                id="flipkartImage" className='ps-1'/></Navbar.Brand>
        </div>
       
        <Form className="d-md-flex flex-grow-1 w-auto" id="searchBox">
        
            <Form.Control 
              type="search"
              placeholder=" Search for Products, Brands and More"
              className="bg-light"
              aria-label="Search"
            ></Form.Control>
        </Form>
       
        
        <Navbar.Text className='d-flex justify-content-evenly align-items-center w-50 fs-6'>
        <div>
        <FaRegUserCircle  className='mb-1 '/>
        <span className='ms-1'>Login</span>
        </div>
        <div>
        <BsCart3  className='mb-1'/>
        <span className='d-xl-inline ms-1' id="headerText">Cart</span>
        </div>
        <div>
        <BsShop  className=' mb-1'/>
        <span className='d-xl-inline ms-1' 
        id="headerText">Become a seller</span>
        </div>
        <CgMoreVertical  />
        </Navbar.Text>
       
      </Container>
    </Navbar>
    
  );
}

export default NavBar;