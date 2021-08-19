import { Link } from "react-router-dom"
import './back-btn.css'

const Back = () => {
    return (
        <div className="back-btn">
            <Link to="/" > &#8592; </Link>
        </div>
    )
}

export default Back