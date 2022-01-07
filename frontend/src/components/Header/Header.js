import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import "./Header.css" 

const Header = () => {
  const history = useHistory()
    return (
        <div>
            
            <Navbar style={{backgroundImage: 'linear-gradient(#838383, #d1d1d1)'}} expand="lg">
                <Container fluid>
                  <Navbar.Brand >
                    <Link className="navStyle" to="/">
                    Incubation
                    </Link>
                    </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                     

                    </Nav>
                    
                    <NavDropdown className="navStyle1" style={{padding:0,width:'80px',marginRight:20,color: 'rgb(124, 123, 123)'}} title="Profile" id="navbarScrollingDropdown">
                      
                      {localStorage.getItem("userInfo") ? 
                        <NavDropdown.Item onClick={()=>{
                          localStorage.removeItem("userInfo")
                          history.push('/')
                        }} >Logout</NavDropdown.Item>

                       :  
                       
                       <NavDropdown.Item onClick={()=>{
                        
                        history.push('/login')
                      }} >Login</NavDropdown.Item>
                        
                       }
                        
                        
                        
                      </NavDropdown>
                      <Nav.Link >
                        {localStorage.getItem("userInfo") ? 
                        <Link style={{padding:0}} className="navStyle"  to="/mybooking">
                        My Booking
                        </Link>
                         :"" }
                        </Nav.Link>
 
                  </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
