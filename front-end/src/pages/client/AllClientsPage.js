import ClientList from "../../components/client/ClientList";
import React, { useEffect, useState } from 'react';
import * as API_USERS from './Client-API';
import "../../components/ui/Mini.css"

function AllClientsPage() {

    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API_USERS.getClients((data, status, err) => {
            if (status === 200) {
                setClients(data);
            } else {
                console.error('An error occurred while fetching clients:', err);
            }
            setIsLoading(false);
        });
    }, []);


    function deleteClientHandler(clientId) {
        API_USERS.deleteClient(clientId, (result, status, err) => {
            console.log("result= " + result + " \nerror= " + err);
        });

    }



    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div className="mini">
            <section >
                <h1>All Clients</h1>
                <ClientList clients={clients} onDelete={deleteClientHandler} />
            </section>
        </div>
    );
}

export default AllClientsPage;