import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function HTTP({ Name, field1, field2 }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "HTTP";
    }, []);


    const output =
        `### GET ALL
GET http://localhost:4000/${Name}s/


### CREATE
POST http://localhost:4000/${Name}s/
Content-Type: application/json

{
  "${field1}": "John Doe",
  "${field2}": "this is john doe"
}


### UPDATE
PUT http://localhost:4000/${Name}s/63613241ebf4974db4ffcb30
Content-Type: application/json

{
  "${field1}": "Jane Doe",
  "${field2}": "this is jane doe"
}


### DELETE
DELETE http://localhost:4000/${Name}s/63613241ebf4974db4ffcb30`

    return (
        <div className="Code">
            <h1>HTTP</h1>
            <kbd>Requests/requests.http</kbd>
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