import Card from "../ui/Card";
import classes from "./ClientItem.module.css"
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

function ClientItem(props) {
    // const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [editedClient, setEditedClient] = useState({
        name: props.name,
        username: props.username,
        password: props.password,
    });

    function editHandler() {
        setIsEditing(true);
    }

    function cancelEditHandler() {
        setIsEditing(false);
    }

    function confirmEditHandler() {
        fetch(`http://localhost:8080/user-management-microservice/admin/clients/${props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedClient)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Client updated successfully");
                }
                else {
                    console.log("Error updating client");
                }
                setIsEditing(false);
                // navigate("/admin/clients", { replace: true });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function changeHandler(e) {
        setEditedClient({ ...editedClient, [e.target.name]: e.target.value });
    }

    // function deleteHandler() {
    //     props.onDelete(props.id);
    // }

    function deleteHandler() {
        fetch(`http://localhost:8080/user-management-microservice/admin/clients/${props.id}`, {
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
                            <label>Name:</label>
                            <input type="text" value={editedClient.name} name="name" onChange={changeHandler} />
                            <label>Username:</label>
                            <input type="text" value={editedClient.username} name="username" onChange={changeHandler} />
                            <label>Password:</label>
                            <input type="text" value={editedClient.password} name="password" onChange={changeHandler} />
                            <div className={classes.editActions}>
                                <button onClick={confirmEditHandler}>Confirm Edit</button>
                                <button onClick={cancelEditHandler}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            < h2 > <strong>Name:</strong> {props.name}</h2>
                            <p><strong>Username:</strong> {props.username} </p>
                            <p><strong>Password:</strong> {props.password} </p>
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

export default ClientItem;