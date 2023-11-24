import CreateDeviceForm from "../../components/device/CreateDeviceForm";
import "../../components/ui/Mini.css"
import * as API_DEVICES from './Device-API';
import React, { useState } from 'react';

function DeviceCreatePage() {

    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission status

    function createDeviceHandler(deviceData) {
        setIsSubmitting(true);
        setMessage('');

        API_DEVICES.postDevice(deviceData, (result, status, err) => {
            if (status === 201 || status === 200) {
                console.log("Device created successfully", result);
                setMessage(deviceData.description + ' created successfully!');
            } else {
                console.error("Error creating device", err);
                setMessage('Error creating client ' + deviceData.description);
            }
        });

    }

    return (
        <div className="mini">
            <section>
                <h1>Create Device</h1>
                <CreateDeviceForm onCreate={createDeviceHandler}></CreateDeviceForm>
                {isSubmitting && message && <p>{message}</p>}
            </section>
        </div>
    );
}

export default DeviceCreatePage;