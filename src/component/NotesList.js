import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const NotesList = () => {
    const data = JSON.parse(localStorage.getItem('notes'))
    console.log(data);

    const content = data && data.map(dt => {
        return (
            <ItemList key={dt.id} id={dt.id} title={dt.title} />
        )
    })

    return (
        <div>
            {content}
        </div>
    )
}

export default NotesList