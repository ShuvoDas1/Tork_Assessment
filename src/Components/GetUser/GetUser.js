import { Button } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './GetUser.css'
import { useHistory } from 'react-router';

const GetUser = () => {
    const [token, setToken] = useState({})
    useEffect(()=>{
        fetch('https://examplebd.com/api/get-csrf-token')
        .then(res => res.json())
        .then(data => setToken(data))
    },[])
    const history = useHistory();
    const goTo  = () =>{
        history.push('/post')
    }
    return (
        <div className='user'>
            <h1>Token is: {token.csrf_token}</h1>
            <Button variant="primary" className='btn' onClick={goTo}>Post Data</Button>
        </div>
    );
};

export default GetUser;