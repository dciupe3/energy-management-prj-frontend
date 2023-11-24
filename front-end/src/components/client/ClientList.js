import ClientItem from "./ClientItem";
import classes from "./ClientList.module.css"

function ClientList(props) {
    return (
        <ul className={classes.list}>
            {props.clients.map((client) => (
                <div className={classes.mini2}>
                <ClientItem 
                    // key={client.id}
                    id={client.id}
                    name={client.name}  
                    username={client.username}
                    password={client.password}
                    onDelete={props.onDelete}
                />
                </div>
            ))}
        </ul>
    );
}

export default ClientList;