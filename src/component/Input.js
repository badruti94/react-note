import './input.css'

const Input = ({handleTitle, handleNote, title, note}) => {
    return (
        <>
            <input id="title" type="text" placeholder="title" value={title} onChange={handleTitle} /> <br />
            <textarea id="note" placeholder="note" value={note} onChange={handleNote} ></textarea>
            <br />
        </>
    )
}

export default Input