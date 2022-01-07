import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import {Link , useNavigate,BrowserRouter,Routes, useHistory} from 'react-router-dom'

import "./LandingPage.css"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
    const history = useHistory()
    useEffect(() => {
        var userInfo = localStorage.getItem("userInfo");
        if(userInfo){
            history.push("/myBooking")
        }
          
    }, [history])

    
    return (
        <>
        <Header />
        <div className="firstPage">
            <Container>
                <Row>
                    <div className="welcomePage">
                        <div className="welcome">
                            <p className="welcome_P">WELCOME</p>
                        </div>
                        
                        

                        <div className="buttonContainer">
                           
                           <Link to="login">
                           <button  style={{marginRight:"30px"}} className="btn btn-outline-success btnStyle">Login</button> 
                           </Link>
                           

                           
                           
                           
                          
                                

                            
                            <Link to="/signup">
                             <button style={{marginLeft:"30px"}}  className="btn btn-outline-success btnStyle">Signup</button>
                            </Link>
                            
                           

                        </div>
                        
                        
                    </div>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    )
}

export default LandingPage
