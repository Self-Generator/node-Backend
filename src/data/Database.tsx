import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function Database() {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Database";
  }, []);

  const output =
    `// Requirements
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;

// CONNECTION LOG
db.once("open", () => console.log("Database Connected!"));

// ERROR LOG
db.on("error", (error) => console.error(error));`

  return (
    <div className="Code">
      <h1>Connection</h1>
      <kbd>Database/Connection.js</kbd>
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