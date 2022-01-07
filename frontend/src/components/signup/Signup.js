import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import "../signup/Signup.css"
import {Link, useHistory} from 'react-router-dom'
import ErrorMessage from '../ErrorMessage'
import axios from 'axios'
import Loading from '../Loading'

const Signup = () => {

    const history = useHistory()

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const submitHandler =async (e) =>{
        e.preventDefault()
        console.log('signup',email);
        if(password !== confirmPassword){
            setMessage('Password Do not Match')
        }else{
            setMessage(null)
            try {
                const config ={
                    headers:{
                        "Content-type":"application/json",
                    },
                }

                setLoading(true)

                const {data} = await axios.post("http://localhost:5000/api/user/signup",{name,mobile,email,password},config)

                
                localStorage.setItem("userInfo",JSON.stringify(data))
                setLoading(false);
                history.push('/login')

            } catch (error) {

                setError(error.response.data.message);
                console.log('signup il error',error);
            }
        }
    }  

    return (
        <div className="loginMainBody">

    <Container>
            <Row>
                <div  className="login">
                    <div>
                    <div className="loginHeadDiv">
                        <p  className="loginHead">Signup</p>
                    </div>
                    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                    {loading && <Loading/>}
                    <form onSubmit={submitHandler}>

                    <div>
                    <input className="loginInput"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Name" type="text"/>
                    </div> <br/>
                    <div>
                    <input className="loginInput"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    placeholder="Mobile Number" type="tel"/>
                    </div> <br/>
                    <div>
                    <input className="loginInput"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email" type="email"/>
                    </div>
                    <br/>
                    
                    <div>
                    <input className="loginInput"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password" type="password"/>
                    </div>
                    <br/>
                    <div>
                    <input className="loginInput"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" type="password"/>
                    </div>
                    <br/>
                    <p>Already have an account<Link to="/login">Login</Link></p>
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

export default Signup
