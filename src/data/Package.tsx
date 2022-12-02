import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function Package() {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Package";
    }, []);


    const output =
        `"scripts": {
    "start": "nodemon index.js"
},`

    return (
        <div className="Code">
            <h1>package</h1>
            <kbd>package.json</kbd>
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