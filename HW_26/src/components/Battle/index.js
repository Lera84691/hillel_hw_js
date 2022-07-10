import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PlayerInput from "./PlayerInput"
import { Link } from "react-router-dom"
import PlayerPreview from "./PlayerPreview";
import { makePlayerSet, makePlayerReset } from "../../actions";


const Battle = () => {
    const playerCount = 2;
    const players = useSelector(state => state.battle.players);
    const dispatch = useDispatch();

    const resetPlayer = (idx) => {
        dispatch(makePlayerReset(idx));
    }

    const submitPlayer = (idx, username) => {
        dispatch(makePlayerSet(idx, username));
    }

    return (
        <>
            <div className="row">
                {players.map((p, i) =>
                    p.name ? <PlayerPreview
                            key={i}
                            avatar={players[i].image}
                            userName={players[i].name}
                        >
                            <button className="reset" onClick={() => resetPlayer(i)}>Reset</button>
                        </PlayerPreview> : <PlayerInput
                            key={i}
                            label={`Player ${i + 1}`}
                            handleSubmit={username => submitPlayer(i, username)}
                        />
                )}
            </div>
            {players.every(p => p.name) ? <Link className="button" to={{
                    pathname: "/battle/results",
                    search: `?${encodeURIComponent(JSON.stringify(players))}`
                }}>Battle</Link> : <div />

            }
        </>
    )
}

export default Battle