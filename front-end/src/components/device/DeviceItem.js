import Card from "../ui/Card";
import classes from "../client/ClientItem.module.css"
import { useState } from 'react';

function DeviceItem(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedDevice, setEditedDevice] = useState({
        description: props.description,
        address: props.address,
        max_hourly_consumption: props.max_hourly_consumption,
    });

    function editHandler() {
        setIsEditing(true);
    }

    function cancelEditHandler() {
        setIsEditing(false);
    }

    function confirmEditHandler() {
        fetch(`http://localhost:8081/device-management-microservice/devices/${props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedDevice)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Device updated successfully");
                }
                else {
                    console.log("Error updating device");
                }
                setIsEditing(false);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function changeHandler(e) {
        setEditedDevice({ ...editedDevice, [e.target.name]: e.target.value });
    }

    // function deleteHandler() {
    //     props.onDelete(props.id);
    // }

    function deleteHandler() {
        fetch(`http://localhost:8081/device-management-microservice/devices/${props.id}`, {
            method: "DELETE"
        })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    {isEditing ? (
                        <div className={classes.editing}>
                            <label>Description:</label>
                            <input type="text" value={editedDevice.description} name="description" onChange={changeHandler} />
                            <label>Address:</label>
                            <input type="text" value={editedDevice.address} name="address" onChange={changeHandler} />
                            <label>Maximum hourly energy consumption:</label>
                            <input type="text" value={editedDevice.max_hourly_consumption} name="max_hourly_consumption" onChange={changeHandler} />
                            <div className={classes.editActions}>
                                <button onClick={confirmEditHandler}>Confirm Edit</button>
                                <button onClick={cancelEditHandler}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            < h2 > <strong>Description:</strong> {props.description}</h2>
                            <p><strong>Address:</strong> {props.address} </p>
                            <p><strong>Maximum hourly energy consumption:</strong> {props.max_hourly_consumption} </p>
                            <p><strong>Id:</strong> {props.id} </p>
                            <div className={classes.actions}>
                                <button onClick={editHandler}>Edit</button>
                                <button onClick={deleteHandler}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            </Card>
        </li >
    );
}

export default DeviceItem;