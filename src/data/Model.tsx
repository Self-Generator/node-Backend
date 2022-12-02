import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function Model({ name, Name, field1, field1t, field2, field2t }) {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Models";
  }, []);

  const output =
    `const mongoose = require("mongoose");

const ${name}Schema = new mongoose.Schema(
  {
    ${field1}: {
      type: ${field1t},
      required: true,
    },
    ${field2}: {
      type: ${field2t},
      required: true,
    },
  },
  {
    collection: "${Name}s",
    versionKey: false,
  } // To Fix "__v: 0"
);

module.exports = mongoose.model("${Name}s", ${name}Schema);`

  return (
    <div className="Code">
      <h1>Models</h1>
      <kbd>Models/{Name}.js</kbd>
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