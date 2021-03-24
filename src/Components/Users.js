import React from 'react';

const Users = (user) => {
        const {user_id, user_name} = user.children;
        console.log(user);
        console.log(user_id)
    return (
        <div className='mx-3'>
            <h2>Name:{user_name}</h2>
            <h3>Id: {user_id}</h3>
        </div>
    );
};

export default Users;