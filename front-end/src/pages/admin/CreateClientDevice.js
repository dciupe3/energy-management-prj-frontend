import ClientListDropdown from "../../components/client/ClientListDropdown";
import React, { useEffect, useState } from 'react';
import * as API_USERS from '../client/Client-API';
import * as API_DEVICES from '../device/Device-API';
import "../../components/ui/Mini.css"
import DeviceListDropdown from "../../components/device/DeviceListDropdown";
import classes from "./CreateClientDevice.module.css";


function CreateClientDevice() {

    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedClient, setSelectedClient] = useState('');

    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState('');

    useEffect(() => {
        API_USERS.getClients((data, status, err) => {
            if (status === 200) {
                setClients(data);
                if (data.length > 0) {
                    setSelectedClient(data[0].id); 
                }
            } else {
                console.error('An error occurred while fetching clients:', err);
            }
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        API_DEVICES.getDevices((data, status, err) => {
            if (status === 200) {
                setDevices(data);
                if (data.length > 0) {
                    setSelectedDevice(data[0].id); // Automatically select the first device by default
                }
            } else {
                console.error('An error occurred while fetching devices:', err);
            }
            setIsLoading(false);
        });
    }, []);

    function handleSelectClient(clientId) {
        setSelectedClient(clientId);
    }

    function handleSelectDevice(deviceId) {
        setSelectedDevice(deviceId);
    }

    const handleCreateMapping = async () => {
        const url = 'http://localhost:8081/device-management-microservice/device-mappings/';
        const mappingData = {
            userId: selectedClient,
            deviceId: selectedDevice
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mappingData)
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            console.log('Mapping created:', data);
            // Perform any actions after successful creation of mapping
        } catch (error) {
            console.error('Failed to create mapping:', error);
        }
    };

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
        <div className="mini">
            <section>
                <h1>Link Client to Device</h1>
                <ClientListDropdown clients={clients} onSelectClient={handleSelectClient} />
                <DeviceListDropdown devices={devices} onSelectDevice={handleSelectDevice} />
                <button onClick={handleCreateMapping}>Create Mapping</button>
                {selectedClient && <p>Selected Client ID: {selectedClient}</p>}
                {selectedDevice && <p>Selected Device ID: {selectedDevice}</p>}
            </section>
        </div>
    </div>
    );
}

export default CreateClientDevice;