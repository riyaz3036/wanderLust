import React from 'react'
import './Footer.css'
import{Row, Col,Container,ListGroup, ListGroupItem} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'


const quick__links = [
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/about',
        display: 'About'
    },
   

]

const quick__links2 = [
    {
        path:'/login',
        display: 'Login'
    },
    {
        path:'/register',
        display: 'Register'
    },

]

const Footer = ()=>{

    
return (
<footer className="footer">

<Container >
<Row >
<Col lg="6" className="temp2">
<div className="logo">
<img src={Logo} alt=""/>
<p>
We offer curated travel experiences, blending luxury with exploration, to create unforgettable journeys around the globe
</p>
</div>
</Col>

<Col lg="3">
<h5 className="footer__link-title">Discover</h5>

<ListGroup className="footer_quick-links">
{
    quick__links.map((item, index )=> (
    <ListGroupItem key={index} className="ps-0 border-0">
        <Link to={item.path}>{item.display}</Link>
    </ListGroupItem>
    ))
}
</ListGroup>

</Col>

<Col lg="3" >
<h5 className="footer__link-title">Quick Links</h5>

<ListGroup className="footer_quick-links">
{
    quick__links2.map((item, index )=> (
    <ListGroupItem key={index} className="ps-0 border-0">
        <Link to={item.path}>{item.display}</Link>
    </ListGroupItem>
    ))
}
</ListGroup>

</Col>


<Col lg="12" className="copy">
    <p className="copyright">
   developed by Md Riyaz Ahmed 
    </p>
</Col>

</Row>


</Container>

</footer>
)
};


export default Footer;