import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Input from '../component/Input'
import Layout from '../component/shared/Layout'
import './add.css'
import Back from '../component/Back'
import Button from '../component/Button'
import Title from '../component/Title'
import axios from 'axios'
import Alert from '../component/Alert'

const Add = () => {
    const [note, setNote] = useState({title: '', note: '' })
    const [alert, setAlert] = useState(null)

    const handleTitle = (e) => {
        setNote({ ...note, title: e.target.value })
    }
    const handleNote = (e) => {
        setNote({ ...note, note: e.target.value })
    }
    const handleSimpan = (e) => {
        

            (async () => {
                const data = await axios.post(
                    'http://localhost:3001',note)

                setAlert(<Alert status={data.data.status} message={data.data.message}  />)
                setTimeout(() => {
                    setAlert(null)
                }, 2000);
            })()

            e.preventDefault()

    }


    return (
        <Layout>
            <div className="home-page">
                {alert}
                <Back />
                <Title text="Add Data" />
                <form>
                    <Input
                        handleTitle={handleTitle}
                        handleNote={handleNote}
                        title={note.title}
                        note={note.note}
                    />
                    <Button title={"Simpan"} onClick={handleSimpan} color="success" />
                </form>
            </div>
        </Layout>
    )
}

export default Add
