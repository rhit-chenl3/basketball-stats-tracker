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

    function handleDelete(id) {
        fetch(`/players/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                setPlayers((players) =>
                    players.filter((player) => player.id !== id)
                );
                alert("player deleted!")
            }
        })
    }

    return players && team ? (
        <div className="TeamCard">
            <br></br>
            <h3>{team.name}</h3>
            <button onClick={() => history.push("/newplayer")}>Add Player</button>
            <div className="app-container">
                <table> 
                <thead>
                <tr>
                <th> Player Name</th>
                <th> Jersey Number</th>
                <th> Points </th>
                <th> Assists </th>
                <th> Rebounds</th>
                <th> Turnovers</th>
                <th> Fouls_P</th>
                <th> Blocks</th>
                <th> Steals</th>
                <th> FG_Attempts</th>
                <th> FG_Made</th>
                <th> 3Pt_Attempts</th>
                <th> 3Pt_Made</th>
                <th> Minutes Played</th>
                <th> Player Image</th>
                <th> Actions</th>
    
                </tr>
                </thead>
                <tbody>
                
                    {players.map((player) => (
                
                        <PlayerCard player={player} key={player.id} handleDelete={handleDelete}/>
                    ))}
                
                </tbody>
                </table> 
    
                </div>
            
            
        </div>
    ) : (null);
}
