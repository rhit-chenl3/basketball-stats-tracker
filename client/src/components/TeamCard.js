import React, { useEffect, useState } from "react";
import PlayerCard from './PlayerCard';
import { useHistory } from "react-router-dom";

export default function TeamCard({team}) {
    // team card will have the player containers which has the playercards
    let history = useHistory();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("/me")
        .then((r) => r.json())
        .then((user) => setPlayers(user.players));
    }, []);

    return players && team ? (
        <div className="TeamCard">
            <br></br>
            <h3>{team.name}</h3>
            <button onClick={() => history.push("/newplayer")}>Add Player</button>
            
            {players.map((player) => (
                <PlayerCard player={player} key={player.id}/>
            ))}
            
            
            
        </div>
    ) : (null);
}
