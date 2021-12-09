import React, { useEffect, useState } from "react";
import TeamCard from './TeamCard';


export default function TeamContainer() {
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
                    <button>Make a New Team</button>
                </>
                
            )}
        </div>
    )
}
