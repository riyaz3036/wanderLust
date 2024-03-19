import React, {useState,useContext} from 'react'
import '../styles/register.css'
import {Container, Row, Col,Form, FormGroup, Button} from 'reactstrap'
import {Link,useNavigate} from 'react-router-dom'
import {BASE_URL} from '../utils/config.js';



const Register = ()=>{

    const [details, setDetails] = useState ({
        username: "",
        password: "",
        email: "",
        phone: ""
    });

   

    

    const handleChange = e=>{
        const { id, value } = e.target;
    setDetails(prevDetails => ({
        ...prevDetails,
        [id]: value
    }));

    }

    const handleSubmit = async e =>{
        e.preventDefault();

        try{


        }catch(err){
          alert(err.message);
        }
    }

        
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="register__container">
                            <div className="register__form">
                            <h2 className="text-center">Register</h2>

                            <Form >
                                <FormGroup>
                                    <input type="text" placeholder="Username" required id="username" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder="Password" required id="password" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <input type="email" placeholder="Email" required id="email" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <input type="text" placeholder="Phone Number" required id="phone" onChange={handleChange}/>
                                </FormGroup>

                                <Button className="btn secondary__btn auth__btn" type="submit" >Create Account</Button>
                            </Form>

                            <p>Already have an account?<Link to="/login">Login</Link></p>
                            </div>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};


export default Register;