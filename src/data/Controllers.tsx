import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function Controllers({ name, Name, field1, field2 }) {
  useEffect(() => {
    Prism.highlightAll();
    document.title = "Controllers";
  }, []);

  const output =
    `const ${Name}s = require("../Models/${Name}");

// GET ALL
const GetAll${Name} = async (req, res) => {
  try {
    const ${Name} = await ${Name}s.find();
    res.status(200).json(${Name});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ONE
const GetOne${Name} = async (req, res) => {
  try {
    const ${Name} = await ${Name}s.findById(req.params.id);
    res.status(200).json(${Name});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
const Create${Name} = async (req, res) => {
  const ${Name} = new ${Name}s({
    ${name}: req.body.${name},
    ${field1}: req.body.${field1},
    ${field2}: req.body.${field2},
  });
  try {
    const new${Name} = await ${Name}.save();
    res.status(201).json(new${Name});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
const Update${Name} = async (req, res) => {
  try {
    const ${Name} = await ${Name}s.findById(req.params.id);
    await ${Name}.updateOne({ $set: req.body });
    res.status(200).send("${Name} Updated");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
const Delete${Name} = async (req, res) => {
  try {
    const ${Name} = await ${Name}s.findById(req.params.id);
    await ${Name}.remove();
    res.status(200).send("${Name} Deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  GetAll${Name},
  GetOne${Name},
  Create${Name},
  Update${Name},
  Delete${Name},
};`

  return (
    <div className="Code">
      <h1>{Name}Controller</h1>
      <kbd>Controllers/{Name}Controller.js</kbd>
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