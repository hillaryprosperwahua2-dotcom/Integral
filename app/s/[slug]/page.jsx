import HeaderRest from '@/components/Layout/HeaderRest'
import Cards from '@/components/Utilities/Cards/Cards'
import BigCarousels from '@/components/Utilities/Carousels/BigCarousels'
import HeaderQuery from '@/components/Utilities/Search/HeaderQuery'
import React from 'react'

const page = () => {
    return (
        <React.Fragment>
            <HeaderRest />
            <main>
                <section className="search-top-setion container">
                    <section className="search-header">
                        {/* <h2>Search result for...</h2> */}
                    </section>

                    <section className="search-card-section">
                        <h3>Trending Properties</h3>
                        <Cards />
                    </section>
                    {/* <section className="search-carousel">
                        <BigCarousels />
                    </section>
                    <section className="search-filter"></section> */}
                </section>
            </main>
        </React.Fragment>
    )
}

export default page