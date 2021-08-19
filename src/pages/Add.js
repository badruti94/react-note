import { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Input from '../component/Input'
import Layout from '../component/shared/Layout'
import './add.css'
import Back from '../component/Back'
import Button from '../component/Button'
import Title from '../component/Title'

const Add = () => {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleNote = (e) => {
        setNote(e.target.value)
    }
    const handleSimpan = (e) => {
        e.preventDefault()
        const notes = JSON.parse(localStorage.getItem('notes')) || []
        notes.push({
            id: uuidv4(),
            title: title,
            note: note
        })

        localStorage.setItem('notes', JSON.stringify(notes))

    }


    return (
        <Layout>
            <div className="home-page">
                <Back />
                <Title text="Add Data" />
                <form>
                    <Input
                    handleTitle={handleTitle}
                    handleNote={handleNote} 
                    title={title}
                    note={note}
                    />
                    <Button title={"Simpan"} onClick={handleSimpan} color="success" />
                </form>
            </div>
        </Layout>
    )
}

export default Add
