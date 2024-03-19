import React, {useState,useEffect}from 'react'
import '../styles/my-bookings.css'
import {Container, Row, Col,List, ListGroup, Button} from 'reactstrap'
import useFetch from '../hooks/useFetch.js';
import {BASE_URL} from '../utils/config.js';


const MyBookings = () =>{


    const {data : user} = useFetch(`${BASE_URL}/users/65f8d91ba67041066723e163`);

    const {bookings} = user; 
    

   
 



    return(
   <section>

    <Container>
        <Row>
            <Col  className="m-auto">

            <div className="details">
    <h5>About Me:</h5>
    <div className="details-item">
    <p><span>Name: </span> {user.username}</p>
    <p><span>Email: </span> {user.email}</p>
    <p><span>Phone: </span> {user.phone}</p>
    <p><span>Available Balance: </span> {user.balance}</p>
    <p><span>Membership: </span>{user.membership}</p>
    </div>
    
</div>


<h5>My Bookings:</h5>

    <div className="my__orders-content">
        {bookings?.map((booking, index) => (
            <div key={index} className="booking-item">

                
                <p><span>Booked Tour:</span>{booking.tour.title}</p>
                <p><span>Guest Size:</span> {booking.guestSize}</p>
                <p><span>Booked for Date:</span> {booking.bookFor}</p>
                <p><span>Price:</span>₹{booking.price}</p>
                <p><span>Activities:</span></p>




                {/* Iterate through activities */}

                {
                  booking.signed_activities.length === 0 ? (
                 <p>(No Additional signed Activities)</p>
                  ) : (
                  booking.signed_activities.map((activity, index) => (
                  <div key={index} className="activity-item">
                  <p>{activity.title}</p>
                  </div>
                  ))
                  )
                }

            </div>
        ))}
    </div>

 

                    
                
            
            </Col>
        </Row>
    </Container>
   </section>
    )
};

export default MyBookings;