import React, { useEffect, useState } from "react";
import TeamCard from './TeamCard';
import { useHistory } from "react-router-dom";




export default function TeamContainer() {
    let history = useHistory();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("/teams")
        .then((r) => r.json())
        .then(setTeams);
    }, []);

    return (
        <div className="Team">
            <br></br>
            {teams.length > 0 ? (
                teams.map((team) => (
                    <TeamCard team={team} />
                ))
            ) : (
                <>
                    <h5>No Teams Found</h5>
                    <button onClick={() => history.push("/newteam")}>Make a New Team</button>
                </>
                
            )}
        </div>
    )
}
