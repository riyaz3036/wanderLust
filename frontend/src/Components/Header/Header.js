import React, {useEffect, useRef} from 'react'
import {Container, Row, Button} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';
import useFetch from '../../hooks/useFetch.js';





const Header = ()=>{

    const {data : User} = useFetch("http://localhost:8000/users/65f8d91ba67041066723e163");

    const nav_links = [
        {
            path:'/home',
            display: 'Home'
        },
        {
            path:'/my-bookings',
            display: 'My Bookings'
        },
        {
            path:'/toggle-Membership',
            display: `${User.username}`
        },    
    
    ]




const headerRef = useRef(null)

const stickyHeaderFunc =()=>{
    window.addEventListener('scroll',()=>{
        if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
            headerRef?.current.classList.add('sticky__header')
        }else{
            headerRef?.current.classList.remove('sticky__header')
        }
    })
}

useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll',stickyHeaderFunc)
})

return (
    <header className="header" ref={headerRef}>
    
    <Container>
    <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* logo start */}

            <div className="logo-top">
                <img className="logo-img" src={logo} alt="logo-image"/>
            </div>
            {/* logo start */}

            {/* menu start */}
            <div className="navigation">

            <ul className="menu d-flex align-items-center gap-5">
            {
                nav_links.map((item,index)=>(
                 <li className="nav__item" key={index}>
                    <NavLink to= {item.path} className={navClass=> navClass.isActive? "active__link":""}>{item.display}</NavLink>
                 </li>
                ))
            }
            </ul>

            </div>
            
            {/* menu end */}

            {/* login register start */}
            <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
 
                <Button className="btn secondary__btn">
                    <Link to='/login'>Login</Link>
                </Button>

                <Button className="btn primary__btn">
                    <Link to='/register'>Register</Link>
                </Button>

                </div>

                <span className="mobile__menu">
                 <i class="ri-menu-line"></i>
                </span>
                
            </div>
            {/* login register end */}


        </div>
    </Row>    
    </Container>


    </header>

)
};


export default Header;