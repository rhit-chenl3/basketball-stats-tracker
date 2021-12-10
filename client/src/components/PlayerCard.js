import React from 'react'
import { useState } from 'react';

export default function PlayerCard({player}) {
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
    function handleDelete() {
        fetch("/players", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
    }

        // fetch("/players", {
        //       method: "PATCH",
        //       headers: { 
        //             "Content-type": "application/json"  },  
        //             body: JSON.stringify({    title: "Corrected post"  })}) 
        //             .then(response => {    console.log(response.status);     
        //             return response.json();  })  
        //             .then(data => console.log(data));
    return (
        <div className="app-container">
        <table> 
<thead>
<tr>
<th> Player Name</th>
<th> Jersey Number</th>
<th> Points</th>
<th> Assists</th>
<th> Rebounds</th>
<th> Turnovers</th>
<th> Fouls</th>
<th> Blocks</th>
<th> Steals</th>
<th> fg_a</th>
<th> fg_m</th>
<th> Three Pts A</th>
<th> Three Pts M</th>
<th> Minutes Played</th>
<th> Player Image</th>
<th> Actions</th>

</tr>
</thead>
<tbody>
    <tr>
        <td>{player.name}</td>
        <td>{player.jersey_num}</td>
       <td> {statCounter}<button onClick={counter}>+</button><button onClick={minusCounter}> -</button> </td> 
       <td> {statCounter1}<button onClick={counter1}>+</button><button onClick={minusCounter1}>-</button></td> 
       <td>{statCounter2} <button onClick={counter2}>+</button>&nbsp;&nbsp;&nbsp;<button onClick={minusCounter2}>-</button></td> 
       <td>{statCounter3} <button onClick={counter3}>+</button>&nbsp;&nbsp;&nbsp;<button onClick={minusCounter3}>-</button> </td> 
       <td> {statCounter4} <button onClick={counter4}>+</button>&nbsp;&nbsp;&nbsp;<button onClick={minusCounter4}>-</button></td> 
       <td>{statCounter5} <button onClick={counter5}>+</button>&nbsp;&nbsp;&nbsp;<button onClick={minusCounter5}>-</button> </td> 
       <td>{statCounter6} <button onClick={counter6}>+</button><button onClick={minusCounter6}>-</button> </td> 
       <td>{statCounter7} <button onClick={counter7}>+</button><button onClick={minusCounter7}>-</button></td> 
       <td> {statCounter8}<button onClick={counter8}>+</button><button onClick={minusCounter8}>-</button></td> 
       <td> {statCounter9}<button onClick={counter9}>+</button><button onClick={minusCounter9}>-</button></td> 
       <td>{statCounter10} <button onClick={counter10}>+</button><button onClick={minusCounter10}>-</button></td> 
       <td> {statCounter11}<button onClick={counter11}>+</button><button onClick={minusCounter11}>-</button></td> 
        <td> <img src={player.picture_url} height="50px" alt="pic"/> </td>
        <td><button onClick={handleDelete}> Delete </button></td>
       
    </tr> 
    
</tbody>
    </table> 

        </div>)
}

