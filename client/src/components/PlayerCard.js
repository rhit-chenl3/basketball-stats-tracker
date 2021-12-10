import React from 'react'
import { useState } from 'react';

export default function PlayerCard({player, handleDelete}) {
    const [statCounter, setStatCounter] = useState(player.points) 
    const [statCounter1, setStatCounter1] = useState(player.assists) 
    const [statCounter2, setStatCounter2] = useState(player.rebounds) 
    const [statCounter3, setStatCounter3] = useState(player.turnovers) 
    const [statCounter4, setStatCounter4] = useState(player.fouls) 
    const [statCounter5, setStatCounter5] = useState(player.blocks) 
    const [statCounter6, setStatCounter6] = useState(player.steals) 
    const [statCounter7, setStatCounter7] = useState(player.fg_a) 
    const [statCounter8, setStatCounter8] = useState(player.fg_m) 
    const [statCounter9, setStatCounter9] = useState(player.threept_a) 
    const [statCounter10, setStatCounter10] = useState(player.threept_m) 
    const [statCounter11, setStatCounter11] = useState(player.min_played) 

    function counter() {
        setStatCounter(statCounter + 1)
    }
    function counter1() {
        setStatCounter1(statCounter1 + 1)
    }
    function counter2() {
        setStatCounter2(statCounter2 + 1)
    }
    function counter3() {
        setStatCounter3(statCounter3 + 1)
    }
    function counter4() {
        setStatCounter4(statCounter4 + 1)
    }
    function counter5() {
        setStatCounter5(statCounter5 + 1)
    }
    function counter6() {
        setStatCounter6(statCounter6 + 1)
    }
    function counter7() {
        setStatCounter7(statCounter7 + 1)
    }
    function counter8() {
        setStatCounter8(statCounter8 + 1)
    }
    function counter9() {
        setStatCounter9(statCounter9 + 1)
    }
    function counter10() {
        setStatCounter10(statCounter10 + 1)
    }
    function counter11() {
        setStatCounter11(statCounter11 + 1)

    }
    function minusCounter() {
        setStatCounter(statCounter - 1)

    }
    function minusCounter1() {
        setStatCounter1(statCounter1 - 1)

    }
    function minusCounter2() {
        setStatCounter2(statCounter2 - 1)

    }
    function minusCounter3() {
        setStatCounter3(statCounter3 - 1)

    }
    function minusCounter4() {
        setStatCounter4(statCounter4 - 1)

    }
    function minusCounter5() {
        setStatCounter5(statCounter5 - 1)

    }
    function minusCounter6() {
        setStatCounter6(statCounter6 - 1)

    }
    function minusCounter7() {
        setStatCounter7(statCounter7 - 1)

    }
    function minusCounter8() {
        setStatCounter8(statCounter8 - 1)

    }
    function minusCounter9() {
        setStatCounter9(statCounter9 - 1)

    }
    function minusCounter10() {
        setStatCounter10(statCounter10 - 1)

    }
    function minusCounter11() {
        setStatCounter11(statCounter11 - 1)

    }

    
    
    function handleUpdate() {
        fetch(`/players/${player.id}`, {
            method: "PATCH",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                points: statCounter,
                assists: statCounter1,
                rebounds: statCounter2,
                turnovers: statCounter3,
                fouls: statCounter4,
                blocks: statCounter5,
                steals: statCounter6,
                fg_a: statCounter7,
                fg_m: statCounter8,
                threept_a: statCounter9,
                threept_m: statCounter10,
                min_played: statCounter11
            }),
        })
    }

    return (
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
                <tr>
                    <td>{player.name}</td>
                    <td>{player.jersey_num}</td>
                    <td> {statCounter} <br/> <button onClick={counter}>+</button><button onClick={minusCounter}>-</button> </td> 
                    <td> {statCounter1} <br/> <button onClick={counter1}>+</button><button onClick={minusCounter1}>-</button></td> 
                    <td>{statCounter2} <br/> <button onClick={counter2}>+</button><button onClick={minusCounter2}>-</button></td> 
                    <td>{statCounter3} <br/> <button onClick={counter3}>+</button><button onClick={minusCounter3}>-</button> </td> 
                    <td> {statCounter4} <br/> <button onClick={counter4}>+</button><button onClick={minusCounter4}>-</button></td> 
                    <td>{statCounter5} <br/> <button onClick={counter5}>+</button><button onClick={minusCounter5}>-</button> </td> 
                    <td>{statCounter6} <br/> <button onClick={counter6}>+</button><button onClick={minusCounter6}>-</button> </td> 
                    <td>{statCounter7} <br/> <button onClick={counter7}>+</button><button onClick={minusCounter7}>-</button></td> 
                    <td> {statCounter8} <br/> <button onClick={counter8}>+</button><button onClick={minusCounter8}>-</button></td> 
                    <td> {statCounter9} <br/> <button onClick={counter9}>+</button><button onClick={minusCounter9}>-</button></td> 
                    <td>{statCounter10} <br/> <button onClick={counter10}>+</button><button onClick={minusCounter10}>-</button></td> 
                    <td> {statCounter11} <br/> <button onClick={counter11}>+</button><button onClick={minusCounter11}>-</button></td> 
                    <td> <img src={player.picture_url ? (player.picture_url) : ("https://i.stack.imgur.com/l60Hf.png")} height="50px" alt="pic"/> </td>
                    <td><button onClick={() => handleDelete(player.id)}> Delete </button> <button onClick={handleUpdate}> Update </button></td>
                
                </tr> 
            </tbody>
            </table> 

        </div>
    )
}

