
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import "./Header.css"

const Header = () => {

  const history = useHistory()


  const Goto_recordList = ()=>{
    history.push('/recordList')
  }

    return (
        <div>
            
            <Navbar className="navbarStyle" expand="lg">
              <Container fluid>
                <Navbar.Brand  >
                    <Link className="Link_style" to="/Admin" >
                    Admin
                    </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Link className="Link_style" to="/Admin">Home</Link>

                    <Link className="Link_style" 
                    onClick={()=>{Goto_recordList()}}
                    >Record List</Link> 
                      <Link className="Link_style"
                      onClick={()=>{history.push('/bookSlot')}}
                      >Booking Slot</Link>
              
                  </Nav>
                  
                  <NavDropdown style={{marginRight:70}} title="Profile" id="navbarScrollingDropdown">
                    {
                      localStorage.getItem("adminInfo") ?

                    <NavDropdown.Item >
                        <Link style={{textDecoration:"none"}} onClick={()=>{localStorage.removeItem("adminInfo")
                      history.push('/Admin_Login')
                      }}>Logout</Link>
                        </NavDropdown.Item>

                        :
                        <NavDropdown.Item >
                        <Link onClick={()=>{
                        history.push('/Admin_Login')
                        }}>Logout</Link>
                          </NavDropdown.Item>
                    }
                  </NavDropdown>

                </Navbar.Collapse>
                


              </Container>
            </Navbar>

        </div>
    )
}

export default Header

