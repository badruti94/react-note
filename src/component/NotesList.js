import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const NotesList = () => {
    const [notes, setNotes] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await axios.get('http://localhost:3001')
            setNotes(data.data.data.notes)
        })()
    }, [])

    const content = notes ? notes.map(dt => {
        return (
            <ItemList key={dt._id} id={dt._id} title={dt.title} />
        )
    }) : 'loading'

    return (
        <div>
            {content}
        </div>
    )
}

export default NotesList