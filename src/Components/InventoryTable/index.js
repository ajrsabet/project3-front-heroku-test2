import React, { useState, useEffect } from "react";
import API from "../../Util/API/API";
import Modal from "../../Components/Modal";

export default function InventoryTable() {

    const [inventoryState, setInventoryState] = useState({
        result: [{

        }]
    });

    const [modalOpen, setModalOpen] = useState(false)

    const [itemToUpdate, setItemToUpdate] = useState({
        id: "",
        title: "",
        quantity: "",
        unit: "",
        value_unit: "",
        exp_date: ""
    })

    useEffect(() => {
        API.getAllInventory(inventoryState)
            .then(res => {
                console.log(res.data);

                setInventoryState({
                    result: res.data
                })
            })
            .catch(err => setInventoryState({
                ...inventoryState,
                error: err.message
            }))
    }, []);

    function deleteRow(id) {
        API.deleteInventoryById(id)
            .then(() => {
                API.getAllInventory(inventoryState)
                    .then(res => {
                        console.log(res.data);

                        setInventoryState({
                            result: res.data
                        })
                    })
                    .catch(err => setInventoryState({
                        ...inventoryState,
                        error: err.message
                    }))
            })
            .catch(err => setInventoryState({
                ...inventoryState,
                error: err.message
            }))
    }

    function editRow() {
        console.log("submit button clicked", itemToUpdate)
        API.updateInventoryById(itemToUpdate).
            then(() => {
                API.getAllInventory(inventoryState)
                    .then(res => {
                        console.log("get all inventory response", res.data);

                        setInventoryState({
                            result: res.data
                        })
                    })
                    .catch(err => setInventoryState({
                        ...inventoryState,
                        error: err.message
                    }))
            })
            .catch(err => setInventoryState({
                ...inventoryState,
                error: err.message
            }))
    }

    function addRow(){
      API.createInventory(itemToUpdate).
            then(() => {
                API.getAllInventory(inventoryState)
                    .then(res => {
                        console.log("get all inventory response", res.data);

                        setInventoryState({
                            result: res.data
                        })
                    })
                    .catch(err => setInventoryState({
                        ...inventoryState,
                        error: err.message
                    }))
            })
            .catch(err => setInventoryState({
                ...inventoryState,
                error: err.message
            }))
    }

    const handleToggleModal = (itemToDisplay) => {
        setItemToUpdate(itemToDisplay);
        setModalOpen(!modalOpen)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemToUpdate({
            ...itemToUpdate,
            [name]: value
        })
    }

    return (
        <>
        <button onClick={() =>handleToggleModal()}>Add</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Food Item</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Value Per Unit</th>
                        <th>Expiration Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventoryState.result.map((inventory) => {
                            return (
                              
                                <tr key={inventory.id}>
                                    <td>{inventory.title}</td>
                                    <td>{inventory.quantity}</td>
                                    <td>{inventory.unit}</td>
                                    <td>${inventory.value_unit}</td>
                                    <td>{inventory.exp_date}</td>

                                    {/* <button onClick={() => editRow(inventory.id)}>Edit</button> */}
                                    <button onClick={() => handleToggleModal(inventory)}>Edit</button>
                                    <button onClick={() => deleteRow(inventory.id)}>Delete</button>

                                </tr>
                    
                            )
                        })
                        
                    }

                </tbody>
            </table>        
            <Modal editRow={editRow} addRow={addRow} handleInputChange={handleInputChange} modalOpen={modalOpen} toggleModal={handleToggleModal} itemToUpdate={itemToUpdate} />
        </>
    );
}