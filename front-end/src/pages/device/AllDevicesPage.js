import DeviceList from "../../components/device/DeviceList";
import * as API_DEVICES from './Device-API';
import "../../components/ui/Mini.css"
import React, { useEffect, useState } from 'react';

function AllDevicesPage() {
    
    const [devices, setDevices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API_DEVICES.getDevices((data, status, err) => {
            if (status === 200) {
                setDevices(data);
            } else {
                console.error('An error occurred while fetching devices:', err);
            }
            setIsLoading(false);
        });
    }, []);

    
    function deleteDevicesHandler(deviceId) {
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
                <h1>All Devices</h1>
                <DeviceList devices={devices} onDelete={deleteDevicesHandler} />
            </section>
        </div>
    );
}

export default AllDevicesPage;