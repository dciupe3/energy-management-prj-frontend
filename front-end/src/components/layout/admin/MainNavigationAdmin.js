import classes from "./MainNavigationAdmin.module.css";
import { Link } from "react-router-dom";

function MainNavigation() {

    const logoutHandler = () => {
        localStorage.removeItem("userRole");
        localStorage.removeItem("userId");
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Administrator</div>
            <nav>
                <ul>
                    <li className={classes.dropdown}>
                        <button className={classes.dropbtn}>Client</button>
                        <div className={classes.dropdownContent}>
                            <Link to="/admin/clients">All Clients</Link>
                            <Link to="/admin/create-client">Create Client</Link>
                        </div>
                    </li>
                    <li className={classes.dropdown}>
                        <button className={classes.dropbtn}>Device</button>
                        <div className={classes.dropdownContent}>
                            <Link to="/admin/devices">All Devices</Link>
                            <Link to="/admin/create-device">Create Device</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/admin/user-device">User-Device</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={logoutHandler}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainNavigation;