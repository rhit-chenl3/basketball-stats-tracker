import React, { useEffect, useState } from "react";
import TeamCard from './TeamCard';
import { useHistory } from "react-router-dom";




export default function TeamContainer({user}) {
    let history = useHistory();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`/me`)
        .then((r) => r.json())
        .then((user) => setTeams(user.teams));
    }, []);


    return (
        <div className="TeamContainer">
            <br></br>
            {teams.length > 0 ? (
                teams.map((team) => (
                    <TeamCard team={team} key={team.id}/>
                ))
            ) : (
                <>
                    <h5>No Team Found</h5>
                    <button onClick={() => history.push("/newteam")}>Make a New Team</button>
                </>
                
            )}
        </div>
    )
}
