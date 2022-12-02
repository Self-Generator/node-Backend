import { useEffect } from "react"
import CopyCode from "../utils/Copy"

export default function _Dependancies() {

    useEffect(() => {
        document.title = "Dependancies"
    })

    const output = `npm i express mongoose dotenv nodemon`

    return (
        <div className="Code">
            <h1>Dependancies</h1>
            <br /> <br />

            <button className="btn-accent green blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>

            <br /> <br />
            <h3>express</h3>
            <h3>mongoose</h3>
            <h3>dotenv</h3>
            <h3>nodemon</h3>
        </div>
    )
}