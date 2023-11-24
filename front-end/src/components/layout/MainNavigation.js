import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Energy Management System</div>
            {/* <nav>
                <ul>
                    <li>
                        {" "}
                        <Link to="/">
                            <div className={classes.logo}>Energy Management System</div>
                        </Link>
                    </li>
                </ul>
            </nav> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header >
    );

}

export default MainNavigation;