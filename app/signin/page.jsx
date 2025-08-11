import HeaderRest from '@/components/Layout/HeaderRest'
import Signin from '@/components/Signin/Signin'
import React from 'react'

const page = () => {
    return (
        <React.Fragment>
            <HeaderRest />
            <Signin />
        </React.Fragment>
    )
}

export default page