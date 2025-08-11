import Header from '@/components/Layout/Header'
import Hero from '@/components/Pages/Home/Hero'
import React from 'react'

const page = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Hero />
            </main>
        </React.Fragment>
    )
}

export default page 