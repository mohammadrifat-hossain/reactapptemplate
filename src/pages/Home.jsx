import React from 'react'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

const Home = () => {
    
    return (
        <div>
            <Header/>
            <Helmet>
                <title>Qill Quest - Blog Website</title>
            </Helmet>
            <div>
                <div></div>
            </div>
        </div>
    )
}

export default Home