import { useRef } from "react";
import classes from "./CreateClientForm.module.css";
import Card from "../ui/Card";

function CreateClientForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();

    function createClientHandler(event) {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredName = nameInputRef.current.value;

        const clientData = {
            username: enteredUsername,
            password: enteredPassword,
            name: enteredName
        };

        props.onCreate(clientData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={createClientHandler}>
                <div className={classes.control}>
                    <label htmlFor="username">Username</label>
                    <input type="text" required id="username" ref={usernameInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" required id="password" ref={passwordInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" required id ="name" ref={nameInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Create</button>
                </div>
            </form>
        </Card>
    );

}

export default CreateClientForm;