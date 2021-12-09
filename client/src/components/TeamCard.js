import React, { useEffect, useState } from "react";
import PlayerCard from './PlayerCard';
import { useHistory } from "react-router-dom";

export default function TeamCard({team}) {
    // team card will have the player containers which has the playercards
    let history = useHistory();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("/players")
        .then((r) => r.json())
        .then(setPlayers);
    }, []);
    // function handleShowPlayers(){
    //     {players.length > 0 ? (
    //         players.map((player) => (
    //             <PlayerCard player={player} />
    //         ))
    //     ) : (
    //         <>
    //             <h5>No Players Found</h5>
    //             <button onClick={() => history.push("/newplayer")}>Add Players</button>
    //         </>
            
    //     )}
    // }
    return (
        <div className="TeamCard">
            <br></br>
            <h3>{team.name}</h3>
            {players.length > 0 ? (
                players.map((player) => (
                    <PlayerCard player={player} />
                ))
            ) : (
                <>
                    <h5>No Players Found</h5>
                    <button onClick={() => history.push("/newplayer")}>Add Players</button>
                </>
            )}
        </div>
    )
}
