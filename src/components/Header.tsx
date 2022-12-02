import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top" id="customNav">
            <div className="container-fluid">
                <ul className="navbar-nav justify-content-start">
                    <Link to="/node-backend/">
                        <img alt="a" id="hrtLogo" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/30a9957af65afeecf3f2430f92a09706952b4056/Assets/Logo/Technologies/Node.svg" draggable="false" />
                    </Link>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-caret-down" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end">

                    </ul>
                </div>
            </div>
        </nav>
    )
}