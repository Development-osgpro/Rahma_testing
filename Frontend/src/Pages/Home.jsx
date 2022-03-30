import React, { useEffect } from 'react'

const Home = ({ history }) => {

    useEffect(() => {
        history.push('/homepage')
    }, [])

    return (
        <></>
    )
}

export default Home