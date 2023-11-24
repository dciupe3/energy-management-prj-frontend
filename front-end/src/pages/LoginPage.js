import { useRef } from "react";
import LoginForm from "../components/login/LoginForm";
import { useNavigate } from "react-router-dom";
import classes from './LoginPage.module.css';
function LoginPage(props) {

    const navigate = useNavigate();

    function loginHandler(loginData) {
        fetch("http://localhost:8080/user-management-microservice/user/login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to log in");
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem("userRole", data.userRole);
                localStorage.setItem("userId", data.id);
                console.log(data.userRole + " " + localStorage.getItem("userId"));

                switch (data.userRole) {
                    case "ADMIN":
                        navigate("/admin", { replace: true });
                        break;
                    case "CLIENT":
                        navigate("/client", { replace: true });
                        break;
                    default:
                        throw new Error("Invalid user type");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className={classes.mini}>
            <section>
                <h1>Login</h1>
                <LoginForm onLogin={loginHandler} />
            </section>
        </div>
    );
}

export default LoginPage;