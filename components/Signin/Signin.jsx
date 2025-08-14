'use client'
import { signIn, useSession } from 'next-auth/react'; // ✅ Added useSession


import React, { useState } from 'react';


const Signin = () => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)

    const { data: session } = useSession();
    const userrole = session;
    console.log(userrole)


    const logon = async (e) => {
        e.preventDefault()
        setLoading(true)

        const { email, password } = userInfo

        try {
            const login = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password
            })

            if (login.error === null) {
                alert('Login successful')
                Router.push('/v2 permission required')
            }
            else {
                alert('Email or password is incorrect')
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <React.Fragment>
            <button onClick={() => signIn('google')}>
                Sign in with Google
            </button>
        </React.Fragment>
    )
}

export default Signin