import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import "./Login.css"

const Login = () => {
   
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)




    const submitHandler =async (e) =>{
        console.log('nokkam',email,password);
        e.preventDefault();
        
        try {
            
            const config = {
                headers:{
                    "Content-Type":"application/json",
                    // "Access-Control-Allow-Origin": "http://localhost:3000",
                    // "Access-Control-Allow-Credentials":"true",
                    
                }
            }

            setLoading(true)
            var {data} = await axios.post(
                "http://localhost:5000/api/user/login",
                {
                    email,
                    password,
                },
                config
            );
                
            localStorage.setItem('userInfo',JSON.stringify(data))
            setLoading(false)
            history.push('/mybooking')

        } catch (error) {
            
            setError(error.response.data.message);
            setLoading(false)
            console.log('ithanu error',error);
            console.log('it error',error.response.data.message);
        }

    }

    return (
        <div className="loginMainBody">

            <Container>
                <Row>
                    <div  className="login">
                        <div>

                        <div className="loginHeadDiv">
                            <p  className="loginHead">Login</p>
                        </div>

                        
                        {error && <ErrorMessage varient='danger'>{error}</ErrorMessage>}
                        <form  onSubmit={submitHandler}>

                        <div>

                        <input className="loginInput" placeholder="Email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email"/>
                        </div>
                        <br/>
                        <div>

                        {loading && <Loading />}
                        </div>
                        <br/>
                        <div>

                        <input className="loginInput" placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"/>

                        </div>
                        <br/>
                        <p>Create an account<Link to="/signup">Signup</Link></p>
                        
                        <div style={{display:'flex',justifyContent:'center'}}>

                        <input className="btn btn-success loginInput" type="submit"/>

                        </div>

                        </form>
                        </div>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default Login
