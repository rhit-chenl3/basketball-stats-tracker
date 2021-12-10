import React from 'react'
import { useState } from 'react';

export default function PlayerCard({player, handleDelete}) {
    const [statCounterPoints, setStatCounterPoints] = useState(player.points) 
    const [statCounterAssists, setStatCounterAssists] = useState(player.assists) 
    const [statCounterRebounds, setStatCounterRebounds] = useState(player.rebounds) 
    const [statCounterTurnovers, setStatCounterTurnovers] = useState(player.turnovers) 
    const [statCounterFouls, setStatCounterFouls] = useState(player.fouls) 
    const [statCounterBlocks, setStatCounterBlocks] = useState(player.blocks) 
    const [statCounterSteals, setStatCounterSteals] = useState(player.steals) 
    const [statCounterFGA, setStatCounterFGA] = useState(player.fg_a) 
    const [statCounterFGM, setStatCounterFGM] = useState(player.fg_m) 
    const [statCounter3PA, setStatCounter3PA] = useState(player.threept_a) 
    const [statCounter3PM, setStatCounter3PM] = useState(player.threept_m) 
    const [statCounterMins, setStatCounterMins] = useState(player.min_played) 

    function counter() {
        setStatCounterPoints(statCounterPoints + 1)
    }
    function counter1() {
        setStatCounterAssists(statCounterAssists + 1)
    }
    function counter2() {
        setStatCounterRebounds(statCounterRebounds + 1)
    }
    function counter3() {
        setStatCounterTurnovers(statCounterTurnovers + 1)
    }
    function counter4() {
        setStatCounterFouls(statCounterFouls + 1)
    }
    function counter5() {
        setStatCounterBlocks(statCounterBlocks + 1)
    }
    function counter6() {
        setStatCounterSteals(statCounterSteals + 1)
    }
    function counter7() {
        setStatCounterFGA(statCounterFGA + 1)
    }
    function counter8() {
        setStatCounterFGM(statCounterFGM + 1)

        setStatCounterPoints(statCounterPoints + 2)
        setStatCounterFGA(statCounterFGA + 1)
    }
    function counter9() {
        setStatCounter3PA(statCounter3PA + 1)
        setStatCounterFGA(statCounterFGA + 1)
    }
    function counter10() {
        setStatCounter3PM(statCounter3PM + 1)

        setStatCounterPoints(statCounterPoints + 3)
        setStatCounter3PA(statCounter3PA + 1)
        setStatCounterFGA(statCounterFGA + 1)
        setStatCounterFGM(statCounterFGM + 1)
    }
    function counter11() {
        setStatCounterMins(statCounterMins + 1)

    }
    function minusCounter() {
        setStatCounterPoints(statCounterPoints - 1)

    }
    function minusCounter1() {
        setStatCounterAssists(statCounterAssists - 1)

    }
    function minusCounter2() {
        setStatCounterRebounds(statCounterRebounds - 1)

    }
    function minusCounter3() {
        setStatCounterTurnovers(statCounterTurnovers - 1)

    }
    function minusCounter4() {
        setStatCounterFouls(statCounterFouls - 1)

    }
    function minusCounter5() {
        setStatCounterBlocks(statCounterBlocks - 1)

    }
    function minusCounter6() {
        setStatCounterSteals(statCounterSteals - 1)

    }
    function minusCounter7() {
        setStatCounterFGA(statCounterFGA - 1)

    }
    function minusCounter8() {
        setStatCounterFGM(statCounterFGM - 1)

        setStatCounterPoints(statCounterPoints - 2)
        setStatCounterFGA(statCounterFGA - 1)
    }
    function minusCounter9() {
        setStatCounter3PA(statCounter3PA - 1)
        setStatCounterFGA(statCounterFGA - 1)
    }
    function minusCounter10() {
        setStatCounter3PM(statCounter3PM - 1)
        setStatCounterPoints(statCounterPoints - 3)
        setStatCounter3PA(statCounter3PA - 1)
        setStatCounterFGA(statCounterFGA - 1)
        setStatCounterFGM(statCounterFGM - 1)
    }
    function minusCounter11() {
        setStatCounterMins(statCounterMins - 1)

    }

    
    
    function handleUpdate() {
        fetch(`/players/${player.id}`, {
            method: "PATCH",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                points: statCounterPoints,
                assists: statCounterAssists,
                rebounds: statCounterRebounds,
                turnovers: statCounterTurnovers,
                fouls: statCounterFouls,
                blocks: statCounterBlocks,
                steals: statCounterSteals,
                fg_a: statCounterFGA,
                fg_m: statCounterFGM,
                threept_a: statCounter3PA,
                threept_m: statCounter3PM,
                min_played: statCounterMins
            }),
        }).then((r) => {
            if (r.ok) {
                alert("player updated!")
            }
        })
    }

    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.jersey_num}</td>
            <td> {statCounterPoints} <br/> <button onClick={counter}>+</button><button onClick={minusCounter}>-</button> </td> 
            <td> {statCounterAssists} <br/> <button onClick={counter1}>+</button><button onClick={minusCounter1}>-</button></td> 
            <td>{statCounterRebounds} <br/> <button onClick={counter2}>+</button><button onClick={minusCounter2}>-</button></td> 
            <td>{statCounterTurnovers} <br/> <button onClick={counter3}>+</button><button onClick={minusCounter3}>-</button> </td> 
            <td> {statCounterFouls} <br/> <button onClick={counter4}>+</button><button onClick={minusCounter4}>-</button></td> 
            <td>{statCounterBlocks} <br/> <button onClick={counter5}>+</button><button onClick={minusCounter5}>-</button> </td> 
            <td>{statCounterSteals} <br/> <button onClick={counter6}>+</button><button onClick={minusCounter6}>-</button> </td> 
            <td>{statCounterFGA} <br/> <button onClick={counter7}>+</button><button onClick={minusCounter7}>-</button></td> 
            <td> {statCounterFGM} <br/> <button onClick={counter8}>+</button><button onClick={minusCounter8}>-</button></td> 
            <td> {statCounter3PA} <br/> <button onClick={counter9}>+</button><button onClick={minusCounter9}>-</button></td> 
            <td>{statCounter3PM} <br/> <button onClick={counter10}>+</button><button onClick={minusCounter10}>-</button></td> 
            <td> {statCounterMins} <br/> <button onClick={counter11}>+</button><button onClick={minusCounter11}>-</button></td> 
            <td> <img src={player.picture_url ? (player.picture_url) : ("https://i.stack.imgur.com/l60Hf.png")} height="50px" alt="pic"/> </td>
            <td><button onClick={() => handleDelete(player.id)}> Delete </button> <button onClick={handleUpdate}> Update </button></td>
                    
        </tr>
                        
    )
}

