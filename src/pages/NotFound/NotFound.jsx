import "./NotFound.css"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="notfound-container">

            <div className="notfound-card">

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for doesn't exist.
                </p>

                <Link
                    className="home-btn"
                    to="/"
                >
                    Go to Dashboard
                </Link>

            </div>

        </div>
    )
}

export default NotFound