import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/shared/Layout'
import NotesList from '../component/NotesList'

const Home = () => {

    return (
        <Layout>
            <NotesList />
        </Layout>
    )
}

export default Home
