import React from 'react';
import classes from "./ClientList.module.css";

function ClientListDropdown(props) {
    return (
        <div className={classes.dropdown}>
            <label htmlFor="client-dropdown">Choose a client:</label>
            <select
                id="client-dropdown"
                name="clients"
                className={classes.dropdownSelect}
                onChange={(e) => props.onSelectClient(e.target.value)}
            >
                {props.clients.map((client) => (
                    <option key={client.id} value={client.id}>
                        {client.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ClientListDropdown;
