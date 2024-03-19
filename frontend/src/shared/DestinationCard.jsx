import React from 'react'
import './destination-card.css'
import {Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom'

const DestinationCard =({dest})=>{

    const {_id, title,description, photo}= dest


    return (

<div className="dest__card">
<Card>
    <div className="dest__img">
        <img src={photo} alt="tour-image"/>
    </div>

    <CardBody>
    <h5 className="dest__title">{title}</h5>

</CardBody>
</Card>


</div>

    )
};

export default DestinationCard;