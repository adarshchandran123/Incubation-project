
import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import ErrorMessage from '../../components/ErrorMessage'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading'
import "./CreateBooking.css"

const CreateBooking = () => {


 
 
    const history = useHistory()

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")
    const [mobile, setMobile] = useState("")
    const [companyBackground, setCompanyBackground] = useState("")
    const [companyAndProduct, setCompanyAndProduct] = useState("")
    const [companyProblems, setCompanyProblems] = useState("")
    const [solution, setSolution] = useState("")
    const [proposition, setProposition] = useState("")
    const [competitors, setCompetitors] = useState("")
    const [revenueModel, setRevenueModel] = useState("")
    const [potentialMarketSize, setPotentialMarketSize] = useState("")
    const [marketProductAndService, setMarketProductAndService] = useState("")
    const [incubation, setIncubation] = useState("Physical Incubation")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    


    const submitHandler =async (e) =>{
        e.preventDefault();
        


        try {
            const config = {
                headers:{
                    "Content-type":"application/json",
                },
            }

            setLoading(true)
            var userinfo = JSON.parse(localStorage.getItem("userInfo"))
            var userId=userinfo._id

            const {data} = await axios.post("http://localhost:5000/api/user/createBooking",{
              name,
              city,
              email,
              companyName,
              address,
              state,
              mobile,
              companyBackground,
              companyAndProduct,
              companyProblems,
              solution,
              proposition,
              competitors,
              revenueModel,
              potentialMarketSize,
              marketProductAndService,
              incubation,
              userId,
              status:"Pending",

            },config)

            setLoading(false)
            history.push('/mybooking')
            


        } catch (error) {
            console.log('enthhaaavum errr',error);
        }

    }


    return ( 
        <div>
            <Header />
            <div className="main_Body">
                <Container>
                <p className="tableHeading">APPLICATION</p>
                      {loading && <Loading/>}
                      {error && <ErrorMessage varient='danger'>{error}</ErrorMessage>}
                        <div className="form_style">

                          
                            <Form onSubmit={submitHandler}>
                                 
                    <Row>

                      <Col md={12} lg={6}>



                        <Form.Group className="mb-3 " controlId="formBasicName">
                          <Form.Label className="input_Label">Name</Form.Label>
                          <Form.Control className="input_Box" type="text"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          required
                          placeholder="Enter Name" />
                                

                        </Form.Group>
                      </Col>
                      <Col md={12} lg={6}>


                        <Form.Group className="mb-3 " controlId="formBasicCity">
                          <Form.Label className="input_Label">City</Form.Label>
                          <Form.Control className="input_Box" type="text"
                          value={city}
                          onChange={(e)=>setCity(e.target.value)}
                          required
                          placeholder="Enter City" />
                                
                        </Form.Group>

                      </Col>

                    </Row>    

                    <Row> 
                      <Col md={12} lg={6}>

                              <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label className="input_Label">Email address</Form.Label>
                                <Form.Control className="input_Box" type="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                                placeholder="Enter email" />
                                
                              </Form.Group>
                      </Col>
                      <Col md={12} lg={6}>

                              <Form.Group className="mb-3 " controlId="formBasicCompanyName">
                                <Form.Label className="input_Label">Company Name</Form.Label>
                                <Form.Control className="input_Box" type="text"
                                value={companyName}
                                onChange={(e)=>setCompanyName(e.target.value)}
                                required
                                placeholder="Enter Company Name" />
                                
                              </Form.Group>
                      </Col>

                    </Row>    

                    <Row>
                      <Col md={12} lg={6}>

                              <Form.Group className="mb-3 " controlId="formBasicAddress">
                                <Form.Label className="input_Label">Address</Form.Label>
                                <Form.Control className="input_Box" type="text"
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                required
                                placeholder="Enter Address" />
                                
                              </Form.Group>
                      </Col>
                      <Col md={12} lg={6}>

                              <Form.Group className="mb-3 " controlId="formBasicState">
                                <Form.Label className="input_Label">State</Form.Label>
                                <Form.Control className="input_Box" type="Text"
                                value={state}
                                onChange={(e)=>setState(e.target.value)}
                                required
                                placeholder="Enter State" />
                                
                              </Form.Group>
                      </Col>

                              <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Mobile</Form.Label>
                                <Form.Control className="input_Box" type="tel"
                                value={mobile}
                                onChange={(e)=>setMobile(e.target.value)}
                                required
                                placeholder="Enter Mobile Number" />
                                
                              </Form.Group>
                            

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Describe your Team and Background</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={companyBackground}
                                onChange={(e)=>setCompanyBackground(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Describe Your Company and Product</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={companyAndProduct}
                                onChange={(e)=>setCompanyAndProduct(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Describe the Problem your are trying to solve</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={companyProblems}
                                onChange={(e)=>setCompanyProblems(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">What is unique about your solution</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={solution}
                                onChange={(e)=>setSolution(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">What is your value proposition for the customer</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={proposition}
                                onChange={(e)=>setProposition(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Who are your competitors and what is your competative advantages</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={competitors}
                                onChange={(e)=>setCompetitors(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Explain your revenue model</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={revenueModel}
                                onChange={(e)=>setRevenueModel(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">What is the potential market size of the product</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={potentialMarketSize}
                                onChange={(e)=>setPotentialMarketSize(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">How do your market or plan to market your product and services</Form.Label>
                                <Form.Control className="input_Box1" type="text"
                                value={marketProductAndService}
                                onChange={(e)=>setMarketProductAndService(e.target.value)}
                                required
                                as="textarea"
                                 />
                                
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPhone">
                                <Form.Label className="input_Label">Type of Incubation needed</Form.Label>
                                <Form.Check 
                                  type="radio"
                                  id="nn"
                                  value="Physical Incubation"
                                  onChange={(e)=>setIncubation(e.target.value)}
                                  
                                  name="Incubation"
                                  label="Physical Incubation"
                                />


                                <Form.Check 
                                  type="radio"
                                  id="nn"
                                  value="Virtual Incubation"
                                  onChange={(e)=>setIncubation(e.target.value)}
                                  name="Incubation"
                                  label="Virtual Incubation"
                                />
                                
                            </Form.Group>
                            
                              
                              <Button variant="success" type="submit">
                                Submit
                              </Button>
                              
                                
                    </Row>
                    <br/><br/>
                              <br/><br/><br/><br/>
                            </Form>
                          
                        </div>
                </Container>
            </div>
        </div>
    )
}

export default CreateBooking
