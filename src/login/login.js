// const Login = (isLoggedIn, setIsLoggedIn) => {

// }

import React, { useState } from "react";

// export default function Login() {
export default function Login({ setIsLoggedIn }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    // setErrorText("");
    const onLoginSubmit = () => {
        if (userName === "abc" && password === "abc") {
            setIsLoggedIn(true);
            setErrorText("");
        }
        else {
            // setUserName("");
            // setPassword("");
            // setErrorText("Username or password is wrong.");
        }
    };

    return(
        <div>
            <div>
                <form onSubmit={() => onLoginSubmit()}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className='errorContainer'>
                <p color='red'>{errorText}</p>
            </div>
        </div>
    );
}