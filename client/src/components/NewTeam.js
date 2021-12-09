import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../index.css";


export default function NewTeam( {user} ) {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/teams", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            history.push("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
        
                <Form.Group size="lg" controlId="teamname">
                <Form.Label  column="lg" >Create a New Team!</Form.Label>
                <Form.Control
                    autoFocus
                    autoComplete="off"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </Form.Group>

                <Button block size="lg" type="submit">
                    {isLoading ? "Loading..." : "Submit"}
                </Button>
                <Form.Group>
                    {errors.map((err) => (
                    <Alert key={err}>{err}</Alert>
                    ))}
                </Form.Group>

            </Form> 
        </div>
    )
}
