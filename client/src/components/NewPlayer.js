import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../index.css";

export default function NewPlayer( {user}) {
    const [name, setName] = useState("");
    const [jerseynum, setJerseynum] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/players", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            jersey_num: parseInt(jerseynum),
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0,
            blocks: 0,
            steals: 0,
            fg_a: 0,
            fg_m: 0,
            threept_a: 0,
            threept_m: 0,
            min_played: 0,
            picture_url: ""
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
        
                <Form.Group size="lg" controlId="playername">
                <Form.Label  column="lg" >Player Name</Form.Label>
                <Form.Control
                    autoFocus
                    autoComplete="off"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </Form.Group>

                <Form.Group size="lg" controlId="playerjerseynum">
                <Form.Label  column="lg" >Jersey Number</Form.Label>
                <Form.Control
                    autoFocus
                    autoComplete="off"
                    type="jerseynum"
                    value={jerseynum}
                    onChange={(e) => setJerseynum(e.target.value)}
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
