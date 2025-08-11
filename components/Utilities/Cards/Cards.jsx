'use client'

import React from 'react'
import data from "@/lib/database/listings.json"
import Heart from '@/lib/svg/Heart'


const Cards = () => {
    const property = () => {
        return data.properties.map((p, i) => {
            return (

                <div className="listing-item" key={i}>
                    <div className="listings-image">
                        <img src={`/assets/images/properties/${p.image}`} alt={`${p.size} at ${p.location}`} />
                    </div>
                    <div className="listings-price">
                        <div className="listings-price-left">
                            ₦{p.price} <span>{p.duration}</span>
                        </div>
                        <div className="listings-price-right">
                            <Heart />
                        </div>
                    </div>
                    <div className="listings-location">
                        {p.location}
                    </div>
                    <div className="listings-details">
                        {
                            p.utilities.room == 1 ?
                                <label>
                                    {p.utilities.room}room
                                </label> :
                                <label>
                                    {p.utilities.rooms}rooms
                                </label>
                        }
                        <span className='dot'></span>

                        {
                            p.utilities.room == 1 ?
                                <label>
                                    {p.utilities.bath}bathroom
                                </label> :
                                <label>
                                    {p.utilities.baths}bathrooms
                                </label>
                        }

                        <span className='dot'></span>


                        <label>
                            {p.utilities.floor}
                        </label>
                        <span className='dot'></span>
                    </div>
                </div>
            )
        }
        )
    }

    const increase = async () => {
        const update = await fetch('/api/listings/update', {
            method: 'POST',
            body: JSON.stringify({
                price: 650000,
                id: "#0000000001",
                location: "JONES HOUSE",
                deal: "Rental",
                duration: "4year",
                size: "4 bedroom",
                utilities: "4 bathrooms",
                watching: 0,
                favourite: true
            })
        })

        const response = await update.json()
        console.log(response)
        alert(response.message)
    }
    return (
        <React.Fragment>

            <div className="listings-con">
                <div className="listings-list">
                    {property()}
                </div>
                <button onClick={increase}>
                    Connect to DB
                </button>
            </div>
        </React.Fragment>
    )
}

export default Cards