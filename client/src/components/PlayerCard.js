import React from 'react'

export default function PlayerCard({player}) {
    return (
        <div>
            {player.name} {player.jersey_num}
            <img src={player.picture_url} height="50px" alt="player"/>

        </div>
    )
}
