"use client"
import React, { useState } from 'react'

const page = () => {
    const [form, setForm] = useState({
        location: '', price: 0, image: '', deal: '', duration: '', size: '', room: 0, bath: 0, floor: '',
    })

    const { location, price, image, deal, duration, size, room, bath, floor } = form

    console.log(form)


    const create = async (e) => {
        e.preventDefault()
        const create = await fetch("/api/listings/create", {
            method: 'POST',
            body: JSON.stringify(form)
        }
        )
        const data = await create.json()
        console.log(data.message)
    }

    return (
        <React.Fragment>
            <header></header>
            <main>
                <section className="user-input">
                    <form onSubmit={create}>
                        <div className="form-field">
                            <label htmlFor="location">
                                Location
                            </label>
                            <input value={location} onChange={e => setForm({ ...form, location: e.target.value })} type="text" name="" id="location" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="price">
                                Price
                            </label>
                            <input value={price} onChange={e => setForm({ ...form, price: e.target.value })} type="number" name="" id="location" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="image">
                                Image
                            </label>
                            <input value={image} onChange={e => setForm({ ...form, image: e.target.value })} type="text" name="" id="image" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="deal">
                                Deal
                            </label>
                            <input value={deal} onChange={e => setForm({ ...form, deal: e.target.value })} type="text" name="" id="deal" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="duration">
                                Duration
                            </label>
                            <input value={duration} onChange={e => setForm({ ...form, duration: e.target.value })} type="text" name="" id="duaration" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="size">
                                Size
                            </label>
                            <input value={size} onChange={e => setForm({ ...form, size: e.target.value })} type="text" name="" id="size" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="room">
                                Room
                            </label>
                            <input value={room} onChange={e => setForm({ ...form, room: e.target.value })} type="number" name="" id="room" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="bath">
                                Bath
                            </label>
                            <input value={bath} onChange={e => setForm({ ...form, bath: e.target.value })} type="number" name="" id="bath" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="floor">
                                Floor
                            </label>
                            <input value={floor} onChange={e => setForm({ ...form, floor: e.target.value })} type="text" name="" id="floor" />
                        </div>

                        <div className="form-submit">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </section>
                <section className="list"></section>

            </main>
            <footer></footer>
        </React.Fragment>
    )
}


export default page