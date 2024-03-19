import React, { useState } from 'react';
import '../styles/toggle.css'
import {BASE_URL} from '../utils/config.js';
import useFetch from '../hooks/useFetch.js';


function ToggleMembership() {


    const {data : User} = useFetch(`${BASE_URL}/users/65f8d91ba67041066723e163`);
    console.log(User);


    const [selectedOption, setSelectedOption] = useState('');
    const [balance,setBalance]= useState('');

   //to change balance
   const handleChange = (event) => {
    setBalance(event.target.value);
};

const handleSubmit = async ()=>{
    try {
        const updatedUserResponse = await fetch(`${BASE_URL}/users/${User._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ balance: balance  })
        });

        if (!updatedUserResponse.ok) {
            throw new Error('Failed to update balance');
        }

        alert('Balance updated successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to update membership. Please try again later.');
    }
}
      //to change membership
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
   
    //to submit membership
    const handleUpdateMembership = async () => {
        try {
            const updatedUserResponse = await fetch(`${BASE_URL}/users/${User._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ membership: selectedOption })
            });

            if (!updatedUserResponse.ok) {
                throw new Error('Failed to update membership');
            }

            alert('Membership updated successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to update membership. Please try again later.');
        }
    };

    return (
        <div className="toggle__main">
            <h5>Coose your Membership</h5>
            <form onSubmit={(e) => { e.preventDefault(); handleUpdateMembership(); }}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="general"
                            checked={selectedOption === 'general'}
                            onChange={handleOptionChange}
                        />
                        General
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="gold"
                            checked={selectedOption === 'gold'}
                            onChange={handleOptionChange}
                        />
                        Gold
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="premium"
                            checked={selectedOption === 'premium'}
                            onChange={handleOptionChange}
                        />
                        Premium
                    </label>
                </div>
                <button type="submit" className="primary__btn">Update Membership</button>
            </form>
            

            <div className="toggle__sub">
                <h5>Update Balance:</h5>
                <div>
      <form onSubmit={handleSubmit}>
              
        <div>
          <label>Balance</label>
          <input
            type="number"
            name="age"
            value={balance}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="primary__btn">Update</button>
      </form>
    </div>
            </div>
        </div>
    );
}

export default ToggleMembership;