import { Link } from "react-router-dom"
import './item-list.css'

const ItemList = ({id, title}) => {
    return (
        <div className="item-list" > 
            <Link to={"/edit/" + id} >{title}</Link>
        </div>
    )
}

export default ItemList