import React, { useState } from "react";
import API from "../../Util/API/API"

export default function FindingSupplier() {
    const [supplierState, setSupplierState] = useState([])
    const [inventoryState, setInventoryState] = useState([])

    const [cityState, setCityState] = useState("")

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
        API.getAllLocation(cityState.city).then(res => {
            console.log(res.data);
            setSupplierState(res.data)

        })
    }
    const handleShowInventory = (id) => {
        console.log(id);
        API.getAllInventory(id).then(res => {
            setInventoryState(res.data)
        })
    }





    return (
        <div>
            <form className="register-form">
                <div className='search-bar'>
                    <h1 htmlFor="searchSupplier" className="tableH1">Supplier Search</h1>
                    <input
                        className='city-search'
                        value={cityState.city}
                        onChange={handleInputChange}
                        type='text'
                        name='city'
                        placeholder='Search By City'
                    />
                    <button className='btn-main' type='submit' onClick={submitRegistration}>Search</button>
                </div>
            </form>
            <div>
                {supplierState.length > 0 ? (

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Street Address</th>
                                <th>City</th>
                                <th>Zipcode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supplierState.map((supplier) => {
                                    return (

                                        <tr key={supplier.Company_profile.id}>
                                            <td>{supplier.Company_profile.company_name}</td>
                                            <td>{supplier.address}</td>
                                            <td>{supplier.city}</td>
                                            <td>{supplier.zip}</td>


                                            <button className='btn-main' onClick={() => handleShowInventory(supplier.id)}>Inventory</button>
                                           
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                ) : (null)}
                 {inventoryState.length>0 ?
                                            (<div className="inventory">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Item</th>
                                                            <th>Quantity</th>
                                                            <th>Unit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            inventoryState.map((inventory) => {
                                                                return (

                                                                    <tr key={inventory.id}>
                                                                        <td>{inventory.title}</td>
                                                                        <td>{inventory.quantity}</td>
                                                                        <td>{inventory.unit}</td>


                                                                        {/* <button onClick={() => handleShowInventory(supplier.id)}>Inventory</button> */}
                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>):null}
            </div>
        </div>

    )
};