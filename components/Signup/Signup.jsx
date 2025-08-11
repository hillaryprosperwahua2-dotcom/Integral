'use client'
import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
        name: '', username: '', email: '', password: ''
    })

    console.log(user)

    const input = (e, type) => {
        setUser({ ...user, [type]: e.target.value })
    }

    const submit = async (e) => {
        e.preventDefault();
        const send = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(user)
        })

        const res = await send.json()

        alert(res.message)
    }

    return (
        <React.Fragment>
            <form onSubmit={submit} className='signup'>
                <input type="text" onChange={e => input(e, 'name')} placeholder='Enter Name' name="name" id='name' />
                <input type="text" onChange={e => input(e, 'username')} placeholder='Enter Username' name="username" id="" />
                <input type="email" onChange={e => input(e, 'email')} placeholder='Enter email' name="email" id="" />
                <input type="password" onChange={e => input(e, 'password')} placeholder='Enter Password' name="" id="" />

                <input type="submit" value="Signup" />
            </form>
        </React.Fragment>
    )
}

export default Signup