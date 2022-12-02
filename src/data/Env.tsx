import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function ENV({ Name }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "ENV";
    }, []);


    const output =
        `PORT = 4000

DB_URL = mongodb://localhost/${Name}s`

    return (
        <div className="Code">
            <h1>ENV</h1>
            <kbd>.env</kbd>
            <br /> <br />

            <button className="btn-accent green blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>

            <pre>
                <code className={'language-js'}>
                    {output}
                </code>
            </pre>
        </div>
    )
}