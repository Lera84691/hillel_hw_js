import { useState } from "react";
import PlayerInput from "./PlayerInput"
import { Link } from "react-router-dom"
import PlayerPreview from "./PlayerPreview";

const Battle = () => {


    const [object, setObject] = useState({
        playerOneName: "",
        playerTwoName: "",
        playerOneImage: null,
        playerTwoImage: null
    })


    const handleSubmit = (id, userName) => {
        setObject((prevData) => ({
            ...prevData,
            [id + "Name"]: userName,
            [id + "Image"]: `https://github.com/${userName}.png?size200`
        }))
    }

    const handleReset = (id) => {
        setObject((prevData) => ({
            ...prevData,
            [id + "Name"]: "",
            [id + "Image"]: null
        }))
    }


    return (
        <>
            <div className="row">
                {!object.playerOneName ? <PlayerInput
                    id="playerOne"
                    label="Player 1"
                    handleSubmit={handleSubmit}
                /> :
                    <PlayerPreview
                        avatar={object.playerOneImage}
                        userName={object.playerOneName}
                        handleReset={handleReset}
                    >
                        <button className="reset" onClick={() => handleReset("playerOne")}>Reset</button>
                    </PlayerPreview>
                }

                {!object.playerTwoImage ?
                    <PlayerInput
                        id="playerTwo"
                        label="Player 2"
                        handleSubmit={handleSubmit}
                    /> :
                    <PlayerPreview
                        avatar={object.playerTwoImage}
                        userName={object.playerTwoName}
                        handleReset={handleReset}
                    >
                        <button className="reset" onClick={() => handleReset("playerTwo")}>Reset</button>
                    </PlayerPreview>
                }

            </div>
            {object.playerOneName && object.playerTwoName &&
                <Link className="button" to={{
                    pathname: "/battle/results",
                    search: `?playerOneName=${object.playerOneName}&playerTwoName=${object.playerTwoName}`
                }}>Battle</Link>
            }
        </>
    )
}

export default Battle