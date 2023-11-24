import React from 'react';
import classes from "../client/ClientList.module.css"; // You might want to create a separate CSS file for devices.

function DeviceListDropdown(props) {
    return (
        <div className={classes.dropdown}>
            <label htmlFor="device-dropdown">Choose a device:</label>
            <select
                id="device-dropdown"
                name="devices"
                className={classes.dropdownSelect}
                onChange={(e) => props.onSelectDevice(e.target.value)}
            >
                {props.devices.map((device) => (
                    <option key={device.id} value={device.id}>
                        {device.description}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DeviceListDropdown;
