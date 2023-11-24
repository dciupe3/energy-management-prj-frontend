import React from "react";
import classes from "./HomePage.module.css";
function HomePage() {
    return (
        <div

            style={{
                backgroundImage: `url(/bg1.webp)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "90vh",
                position: "fixed",
                display: "flex",
                right: "0px",
                left: "0px",
                flexDirection: "column",
              }}
        >
            <h1 className={classes.h1_home}>Welcome to the Energy Management System Page!</h1>
        </div >
    );
}

export default HomePage;