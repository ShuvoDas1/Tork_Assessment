import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Users from '../Users';

const Postuser = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [users, setUser] = useState([])

    const onSubmit = (data,e) => {
        fetch('https://examplebd.com/api/live-classes?user_id=10089', {

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })  
        
    };
    return (
        <>
        <div className='container'>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col'>
                        <input name="id" className='form-control' placeholder='Enter id' ref={register} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='col'>
                        <input name="name" className='form-control' placeholder='Enter name' ref={register} />
                        {errors.name && <span>This field is required</span>}
                    </div>    
                </div>

                <input type="submit" className='btn btn-success mt-3'/>
            </form>
        </div>
        {
            users.map(user => <Users>{user}</Users>)
        }
        </>
    );
};

export default Postuser;