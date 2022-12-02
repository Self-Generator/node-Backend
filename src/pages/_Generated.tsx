import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";
import { Link } from "react-router-dom";


export const _Generated = ({ finalUrl }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const output = `npm init -y`

    return (
        <div className="Code">
            <h1>Get Started</h1>
            <div className="d-flex justify-content-center align-items-center">
                <pre>
                    <code className={'language-js'}>
                        {output}
                    </code>
                </pre>
                <button className="btn-accent blue blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>
            </div>

            <h1>Structure</h1>
            <h4>For <em>Message</em></h4>


            <div className="d-flex justify-content-center pt-5">
                <img src={require("../assets/Structure.png")} alt="structure" draggable='false' />

                <div className="d-flex align-items-start flex-column">
                    <Link to={"/node-backend/Generate/Controllers/" + finalUrl} className="btn-accent purple blk mt-5">Controllers</Link>
                    <Link to={"/node-backend/Generate/Database/" + finalUrl} className="btn-accent yellow blk mt-3">Database</Link>
                    <Link to={"/node-backend/Generate/Model/" + finalUrl} className="btn-accent red blk mt-3">Models</Link>
                    <Link to={"/node-backend/Generate/TheRoute/" + finalUrl} className="btn-accent green blk mt-3">Routes</Link>
                    <Link to={"/node-backend/Generate/ENV/" + finalUrl} className="btn-accent white blk mt-3">.env</Link>
                    <Link to={"/node-backend/Generate/Index/" + finalUrl} className="btn-accent  white blk mt-3">index.js</Link>
                    <Link to={"/node-backend/Generate/Package/" + finalUrl} className="btn-accent  white blk mt-3">package.json</Link>
                </div>
            </div>


            <h1>Sample Project</h1>
            <a href="https://github.com/ProjectTutorials/message-API" target={"_blank"} rel="noreferrer">
                <img className="mt-2 repoImg" src='https://github-readme-stats.vercel.app/api/pin/?username=ProjectTutorials&repo=message-API&bg_color=f8fff5&title_color=005a80&text_color=4d4b49' alt="" />
            </a>

            <h1>Download Sample</h1>
            <h4><a className="mb-5 " href={require("../assets/message-API.zip")}>Download</a></h4>

        </div>
    )
}