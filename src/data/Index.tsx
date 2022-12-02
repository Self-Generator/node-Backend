import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function Index() {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Index";
    }, []);


    const output =
        `require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

// Start Server
const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log('Server started at port no ' + Port));

// Database Connection
require("./Database/Connection");

// Routing
const messageRouter = require("./Routes/Message");
app.use("/Messages", messageRouter);`

    return (
        <div className="Code">
            <h1>index</h1>
            <kbd>index.js</kbd>
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