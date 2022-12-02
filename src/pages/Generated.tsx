import { GeneratedRoutes } from "../routes/GeneratedRoutes"
import { Link } from 'react-router-dom'
import { useEffect } from "react"

export const Generate = () => {

    useEffect(() => {
        document.title = "Generated"
    })

    const url = window.location.href;
    const urlSplit = url.split("/");
    const name = urlSplit[urlSplit.length - 3];
    const field1 = urlSplit[urlSplit.length - 2];
    const field2 = urlSplit[urlSplit.length - 1];

    const finalUrl = `${name}/${field1}/${field2}`

    return (
        <div className="Reader">
            <br /><br />
            <div className="d-flex justify-content-between ">
                <div className="d-flex justify-content-start">
                    <Link to={"/node-backend/Generate/Dependancies/" + finalUrl} className="btn-accent sky">Dependancies</Link>
                    <Link to={"/node-backend/Generate/HTTP/" + finalUrl} className="btn-accent red blk">HTTP</Link>
                </div>
                <Link to={"/node-backend/Generate/" + finalUrl} className="btn-accent black"><i className="fa-solid fa-arrow-left-long"></i> Back</Link>
            </div>

            <div className="d-flex justify-content-center pt-5">
                <Link to={"/node-backend/Generate/Controllers/" + finalUrl} className="btn-accent purple blk">Controllers</Link>
                <Link to={"/node-backend/Generate/Database/" + finalUrl} className="btn-accent yellow blk">Database</Link>
                <Link to={"/node-backend/Generate/Model/" + finalUrl} className="btn-accent red blk">Models</Link>
                <Link to={"/node-backend/Generate/TheRoute/" + finalUrl} className="btn-accent green blk">Routes</Link>
            </div>
            <div className="d-flex justify-content-center pt-3">
                <Link to={"/node-backend/Generate/ENV/" + finalUrl} className="btn-accent white blk">.env</Link>
                <Link to={"/node-backend/Generate/Index/" + finalUrl} className="btn-accent  white blk">index.js</Link>
                <Link to={"/node-backend/Generate/Package/" + finalUrl} className="btn-accent  white blk">package.json</Link>
            </div>

            <GeneratedRoutes />
        </div>
    )
}   
