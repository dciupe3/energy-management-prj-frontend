import DeviceItem from "./DeviceItem";
import classes from "../client/ClientList.module.css"

function DeviceList(props) {
    return (
        <ul className={classes.list}>
            {props.devices.map((device) => (
                <div className={classes.mini2}>
                <DeviceItem 
                    // key={device.id}
                    id={device.id}
                    description={device.description}  
                    address={device.address}
                    max_hourly_consumption={device.max_hourly_consumption}
                    onDelete={props.onDelete}
                />
                </div>
            ))}
        </ul>
    );
}

export default DeviceList;