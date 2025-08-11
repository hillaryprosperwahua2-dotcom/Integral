'use client'

import Globe from '@/lib/svg/Globe'
import Menu from '@/lib/svg/Menu'
import Moon from '@/lib/svg/Moon'
import Sun from '@/lib/svg/Sun'
import React, { useState } from 'react'
import HeaderQuery from '@/components/Utilities/Search/HeaderQuery'

const HeaderRest = () => {
    const [mode, setMode] = useState("light")


    return (
        <React.Fragment>
            <header>
                <section className="header-rest">
                    <section className="header header-rest-text">
                        <section className="header-left"><div className='logo'><strong> RestHunt </strong></div></section>

                        <section className="header-mid">
                            <nav className="header-nav">
                                <a href="" className='header-nav-active'>Home</a>
                                <a href="">About Us</a>
                                <a href="">Property</a>
                                <a href="">Contact Us</a>
                            </nav>
                        </section>
                        <section className="header-right">
                            <div className="user-pref">
                                <div className="become-seller">Become a Realtor</div>
                                <div className="toggle-menu">
                                    {
                                        mode == "light" ? <Sun /> : <Moon />
                                    }
                                </div>
                                <div className="menu">
                                    <Menu />
                                    <div className="menu-dropdown">
                                        <div className="menu-dropdown-con">
                                            <div className="menu-list">
                                                <div className="lang">
                                                    <Globe />
                                                    <label>Eng</label>
                                                </div>
                                                <a href="" className="signin">Signup</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <div className="search-bottom-section">
                        <HeaderQuery />
                    </div>
                </section>
            </header>
        </React.Fragment>
    )
}

export default HeaderRest