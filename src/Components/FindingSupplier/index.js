import React, { useState } from "react";
import API from "../../Util/API/API"

export default function FindingSupplier() {
    const [supplierState, setSupplierState] = useState([])

    const [cityState, setCityState] = useState( "" )

    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setCityState({
            ...cityState,
            [name]: value
        });

    };

    const submitRegistration = (event) => {
        event.preventDefault();
        API.getAllLocation(cityState.city).then(res=> {
            console.log(res.data);
            setSupplierState(res.data)
            
        })
    }





    return (
        <form className="register-form">
            <div className='input-container'>
                <label htmlFor="searchSupplier">Charity</label>
                <input
                    value={cityState.city}
                    onChange={handleInputChange}
                    type='text'
                    name='city'
                    placeholder='CITY SEARCH'
                />
                <button type='submit' onClick={submitRegistration}>SUBMIT</button>
            </div>
        </form>
        
    )
};