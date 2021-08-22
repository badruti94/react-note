import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Alert from '../component/Alert'
import Back from '../component/Back'
import Button from '../component/Button'
import Input from '../component/Input'
import Layout from '../component/shared/Layout'
import Title from '../component/Title'

const Edit = () => {
    const { id } = useParams()
    const [note, setNote] = useState({title: '', note: '' })
    const [alert, setAlert] = useState(null)
    const history = useHistory()

    useEffect(() => {
        (async ()=> {
            const notes = await axios.get(`http://localhost:3001/${id}`)
            setNote(notes.data.data.note)
        })()

    }, [])

    const titleHandler = (e) => {
        setNote({ ...note, title: e.target.value })
    }
    const noteHandler = (e) => {
        setNote({ ...note, note: e.target.value })
    }
    const submitHandler = (e) => {
        (async ()=>{
            const data = await axios.put(`http://localhost:3001/${id}`, note)

            setAlert(<Alert status={data.data.status} message={data.data.message}  />)
                setTimeout(() => {
                    setAlert(null)
                }, 2000);
        })()
        
        e.preventDefault()
    }

    const deleteHandler = (e) => {
        (async () => {
            await axios.delete(`http://localhost:3001/${id}`)
        })()

        e.preventDefault()

        history.push('/')

    }

    return (
        <Layout>
            {alert}
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
