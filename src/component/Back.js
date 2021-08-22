import { useHistory } from "react-router-dom"
import './back-btn.css'

const Back = () => {
    const history = useHistory()

    const clickHandler = () => {
        history.push('/')
    }

    return (
        <div className="back-btn" onClick={clickHandler} >
            &#8592;
        </div>
    )
}

export default Back