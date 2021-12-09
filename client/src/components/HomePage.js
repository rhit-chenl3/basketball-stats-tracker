import React from "react";
import "../index.css";
import TeamContainer from "./TeamContainer";


export default function HomePage({user}) {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Statracker</h1>
                <p className="text-muted">Easily track your school's basketball team stats!</p>
                {/* user = true => page functionality, false => none */}
                {user ? (
                    <>
                        <div>Welcome, {user.username}!</div>
                        <TeamContainer user={user}/>
                    </>
                        
                    ) : (
                        <div></div>   
                    )}
            </div>
        </div>
    )
}
