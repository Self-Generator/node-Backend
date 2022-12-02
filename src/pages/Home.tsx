import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    useEffect(() => {
        document.title = "node-backend"
    })

    return (
        <div className="Reader pushDown100 text-center">
            <div className="skew-down">
                <div className="inskew-down ">
                    <h1>Generate <b>node-backend</b> in <em>seconds</em></h1>
                    <h1>Avoid <i>wasting</i> hours</h1>
                    <h1>in typing <em>same code</em></h1>
                    <h1><em>again</em> and <em>again</em></h1>
                </div>
            </div>
            <Link className="btn-accent skyBackground btnnn" to="/node-backend/Form">Get Started <i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    );
}
