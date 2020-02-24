import React, { useState, useEffect } from "react";
import API from "../../Util/API/API"


export default function FindingSupplier() {

    // Check login status and redirect if not logged in
    useEffect(() => {
        API.verifyLogin().then(res => {
            setSessionData(res.data);
        }).catch(err => {
            alert(err)
            window.location.href = "/login";
        })
    }, [])

    const [sessionData, setSessionData] = useState({})
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
        setInventoryState([])
        API.getAllLocation(cityState.city).then(res => {
            setSupplierState(res.data)

        })
    }
    const handleShowInventory = (id) => {
        API.getAllInventory(id).then(res => {
            setInventoryState(res.data)
        })
    }

    const claimInventory = () => {
        const inventoryItem = [...inventoryState]

        inventoryItem.map((item) => {
            item.charity_id = sessionData.CompanyProfileId
        })


        API.updateInventoryBulk({ inventoryItem })

    }





    return (
        <div>
            <form className="register-form">
                <div className='search-bar'>
                    <h1 htmlFor="searchSupplier" className="sectionH1">Supplier Search</h1>
                    <p>Search by City</p>
                    <input
                        className='city-search'
                        value={cityState.city}
                        onChange={handleInputChange}
                        type='text'
                        name='city'
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


                                            <td><button className='btn-main' onClick={() => handleShowInventory(supplier.id)}>Inventory</button></td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                ) : (null)}
                {inventoryState.length > 0 ?
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



                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <button className="btn-main" onClick={() => claimInventory()}>Claim</button>
                    </div>) : null}
            </div>
        </div>

    )
};