import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../base.js";
import { AuthContext } from "../../Auth.js";
import { Button } from "../Button";
import Navbar from "../Navbar/Navbar.js";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push("/admin");
            } catch (error) {
                console.log("admin login error:", error);
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin" />;
    }

    return (
        <>
            <Navbar />
            <div className="form login-form">
                <div className="container">
                    <h2 className="mb-3">Log in to the admin area</h2>
                    <form onSubmit={handleLogin}>
                        <input name="email" type="email" placeholder="Email" />
                        <input name="password" type="password" placeholder="Password" />
                        <Button type="submit">Log in</Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default withRouter(Login);
