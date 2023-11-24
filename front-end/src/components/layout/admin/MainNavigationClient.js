import classes from "./MainNavigationAdmin.module.css";
import { Link } from "react-router-dom";

function MainNavigationClient() {

    const logoutHandler = () => {
        localStorage.removeItem("userRole");
        localStorage.removeItem("userId");
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Client</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/client/devices">Devices</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={logoutHandler}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainNavigationClient;