import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function Register() {
    const [message, setMessage] = useState("");

    function handleRegister(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        const name = e.target.formBasicName.value; // Get the name value
        const email = e.target.formBasicEmail.value; // Get the email value
        const password = e.target.formBasicPassword.value; // Get the password value

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        // Send data to the backend server
        fetch('http://localhost:7071/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Response from server:", data.message);
            setMessage(data.message); // Display server response to the user
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;