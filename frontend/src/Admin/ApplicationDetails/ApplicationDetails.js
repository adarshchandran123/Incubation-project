
import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Header from '../Header/Header'

const ApplicationDetails = () => {
    const history=useHistory() 

    const GotoAdmin=()=>{
        history.push('/Admin')
    }

    const [formDtails, setFormDetails] = useState({})


    const getFormDetail = async () =>{

        const FormId = JSON.parse(localStorage.getItem("singleForm"))


        const config = {
            headers : {
                "Content-Type":"application/json"
            }
        }
        const data = await axios.get(`http://localhost:5000/api/user/mybookings/${FormId}`,config)
        
        setFormDetails(data.data)
    }



    useEffect(() => {
        getFormDetail()
    }, [])

    return (
        <>
        <Header/>
        <div className="main_Body1">
            <Container>
                    
                    <p style={{marginTop:50}} className="tableHeading">APPLICATION</p>
            <div style={{border:"#e9ecef solid 1px ",boxShadow:"#889098 1px 9px 16px 1px" ,padding:8,borderRadius:10}}>
                     
            <Form>
                <Row>
                    <Col md={12} lg={6}>
                        <Form.Group className="mb-3 " controlId="formBasicName">
                            <Form.Label className="input_Label">Name</Form.Label>
                            <Form.Control className="input_Box" type="text"
                            value={formDtails.name}
                            readOnly
                            />
                            
                        </Form.Group>
                    </Col>

                    <Col md={12} lg={6}>
                        <Form.Group className="mb-3 " controlId="formBasicCity">
                            <Form.Label className="input_Label">City</Form.Label>
                            <Form.Control className="input_Box" type="text"
                            value={formDtails.city}
                            readOnly
                            />
                                
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col md={12} lg={6}>

                        <Form.Group className="mb-3 " controlId="formBasicCity">
                            <Form.Label className="input_Label">Incubation</Form.Label>
                            <Form.Control className="input_Box" type="text"
                            value={formDtails.incubation}
                            readOnly
                            />
                                
                        </Form.Group>
                    </Col>
                    <Col md={12} lg={6}>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label className="input_Label">Email address</Form.Label>
                                <Form.Control className="input_Box" type="email"
                                value={formDtails.email}
                                readOnly
                                />
                                
                        </Form.Group>
                    </Col>

                </Row>

                <Row>    
                    <Col md={12} lg={6}>

                              <Form.Group className="mb-3 " controlId="formBasicCompanyName">
                                <Form.Label className="input_Label">Company Name</Form.Label>
                                <Form.Control className="input_Box" type="text"
                                value={formDtails.companyName}
                                readOnly
                                />
                                
                              </Form.Group>
                    </Col>

                    <Col md={12} lg={6}>


                              <Form.Group className="mb-3 " controlId="formBasicAddress">
                                <Form.Label className="input_Label">Address</Form.Label>
                                <Form.Control className="input_Box" type="text"
                                value={formDtails.address}
                                readOnly
                                />
                                
                              </Form.Group>
                    </Col>

                </Row>

                <Row>  

                    <Col md={12} lg={6}>

                              <Form.Group className="mb-3 " controlId="formBasicState">
                                <Form.Label className="input_Label">State</Form.Label>
                                <Form.Control className="input_Box" type="Text"
                                value={formDtails.state}
                                readOnly
                                />
                                
                              </Form.Group>
                    </Col>

                    <Col md={12} lg={6}>


                              <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Mobile</Form.Label>
                                <Form.Control className="input_Box" type="tel"
                                value={formDtails.mobile}
                                readOnly
                                />
                                
                              </Form.Group>
                            
                    </Col>

                </Row>

                <Row>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Describe your Team and Background</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.companyBackground}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Describe Your Company and Product</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.companyAndProduct}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Describe the Problem your are trying to solve</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.companyProblems}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">What is unique about your solution</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.solution}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">What is your value proposition for the customer</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.proposition}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Who are your competitors and what is your competative advantages</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.competitors}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Explain your revenue model</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.revenueModel}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">What is the potential market size of the product</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.potentialMarketSize}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">How do your market or plan to market your product and services</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={formDtails.marketProductAndService}
                                readOnly
                                as="textarea"
                                 />
                                
                            </Form.Group>




                </Row>

            </Form>
            <div style={{display:"flex",justifyContent:"center"}}>

                
            <span onClick={()=>{GotoAdmin()}} style={{width:98,color:"white",cursor:"pointer",fontWeight:600,backgroundColor:"green",padding:4,border:"#115a38 solid 2px"}}>
                Goto Back
            </span>
               
            </div>
            </div>
            
            <br/><br/><br/><br/>
                         
                    
            </Container>
            
        </div>
        </>
        

    )
}

export default ApplicationDetails;

