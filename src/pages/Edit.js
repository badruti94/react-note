import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Back from '../component/Back'
import Button from '../component/Button'
import Input from '../component/Input'
import Layout from '../component/shared/Layout'
import Title from '../component/Title'

const Edit = () => {
    const { id } = useParams()
    const [note, setNote] = useState({ id: '', title: '', note: '' })
    const history = useHistory()

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        const noteById = notes.filter(note => {
            return note.id === id;
        })

        setNote(noteById[0])

    }, [])

    const titleHandler = (e) => {
        setNote({ ...note, title: e.target.value })
    }
    const noteHandler = (e) => {
        setNote({ ...note, note: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()

        const notes = JSON.parse(localStorage.getItem('notes'))
        const newNotes = notes.map(nt => {
            if (nt.id === id) {
                return note
            }
            return nt
        })

        localStorage.setItem('notes', JSON.stringify(newNotes))


    }

    const deleteHandler = (e) => {
        e.preventDefault()

        const notes = JSON.parse(localStorage.getItem('notes'))
        const newNotes = notes.filter(nt => nt.id !== note.id)
        localStorage.setItem('notes', JSON.stringify(newNotes))

        history.push('/')

    }

    return (
        <Layout>
            <Back />
            <Title text="Edit Data" />
            <form >
                <Input
                handleTitle={titleHandler}
                handleNote={noteHandler}
                title={note.title} 
                note={note.note}
                />
                <Button title="Update" onClick={submitHandler} color="success" />
                <Button title="Delete" onClick={deleteHandler} color="danger" />
            </form>
        </Layout>
    )
}

export default Edit
