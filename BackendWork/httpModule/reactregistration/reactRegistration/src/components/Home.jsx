import React from "react";
import {Link,Outlet} from "react-router-dom";
function Home(){
    return(
        <div style={{
            textAlign: "center",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            maxWidth: "600px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>Welcome Student management
        <nav>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </div>
    )
}

export default Home;