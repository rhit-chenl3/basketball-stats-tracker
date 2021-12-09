import React from 'react'

export default function PlayerCard({player}) {
    return (
        <div>
            {player.name} {player.jersey_num}
        </div>
    )
}
