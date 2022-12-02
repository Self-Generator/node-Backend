import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function TheRoute({ Name }) {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Routes";
  }, []);

  const output =
    `const express = require("express");
const {
  GetAll${Name},
  GetOne${Name},
  Create${Name},
  Update${Name},
  Delete${Name},
} = require("../Controllers/${Name}Controller");
const router = express.Router();
const ${Name}s = require("../Models/${Name}");

// GET ALL
router.get("/", GetAll${Name});

// GET ONE
router.get("/:id", GetOne${Name});

//CREATE
router.post("/", Create${Name});

//UPDATE
router.put("/:id", Update${Name});

//DELETE
router.delete("/:id", Delete${Name});

module.exports = router;
`

  return (
    <div className="Code">
      <h1>Routes</h1>
      <kbd>Routes/{Name}.js</kbd>
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