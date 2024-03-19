import React, {useState,useContext}from 'react'
import '../styles/login.css'
import {Container, Row, Col,Form, FormGroup, Button} from 'reactstrap'
import {Link,useNavigate} from 'react-router-dom'
import {BASE_URL} from '../utils/config.js';


const Login = ()=>{




    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const handleChange = e=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
    }


   
   const submit = async e=>{
    e.preventDefault();

    try{

       

    }catch(e){
        
    }


   }
        
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="login__container">
                            <div className="login__form">
                            <h2 className="text-center">Login</h2>

                            <Form >
                                <FormGroup>
                                    <input type="text" placeholder="email" required id="email" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder="Password" required id="password" onChange={handleChange}/>
                                </FormGroup>

                                <Button className="btn secondary__btn auth__btn" type="submit" >Login</Button>
                            </Form>

                            <p>Dont have an account?<Link to="/register">Register</Link></p>
                            </div>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};


export default Login;