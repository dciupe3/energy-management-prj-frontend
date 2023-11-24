import { useRef } from "react";
import classes from "../client/CreateClientForm.module.css";
import Card from "../ui/Card";

function CreateDeviceForm(props) {
    const descriptionInputRef = useRef();
    const addressInputRef = useRef();
    const max_hourly_consumptionInputRef = useRef();

    function createDeviceHandler(event) {
        event.preventDefault();

        const enteredDescription = descriptionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredConsumption = max_hourly_consumptionInputRef.current.value;
        
        const deviceData = {
            description: enteredDescription,
            address: enteredAddress,
            max_hourly_consumption: enteredConsumption
        };

        props.onCreate(deviceData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={createDeviceHandler}>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <input type="text" required id="description" ref={descriptionInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="consumption">Maximum hourly energy consumption</label>
                    <input type="number" required id ="consumption" ref={max_hourly_consumptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Create</button>
                </div>
            </form>
        </Card>
    );

}

export default CreateDeviceForm;