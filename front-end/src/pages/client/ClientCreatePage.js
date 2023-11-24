import CreateClientForm from "../../components/client/CreateClientForm";
import "../../components/ui/Mini.css"
import * as API_USERS from './Client-API';
import React, { useState } from 'react';


function ClientCreatePage() {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission status


    function createClientHandler(clientData) {
        setIsSubmitting(true);
        setMessage(''); 

        API_USERS.postClient(clientData, (result, status, err) => {
            if (status === 201 || status === 200) {
                console.log("Client created successfully", result);
                setMessage(clientData.username + ' created successfully!');
            } else {
                console.error("Error creating client", err);
                setMessage('Error creating client ' + clientData.username);
            }
        });

    }

    return (
        <div className="mini">
            <section>
                <h1>Create Client</h1>
                <CreateClientForm onCreate={createClientHandler}></CreateClientForm>
                {isSubmitting && message && <p>{message}</p>}
            </section>
        </div>
    );
}

export default ClientCreatePage;