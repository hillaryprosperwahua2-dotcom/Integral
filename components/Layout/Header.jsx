import Globe from "@/lib/svg/Globe"
import React from 'react'
import HeaderQuery from "../Utilities/Search/HeaderQuery"

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <section className="header white-header-text">
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
                            <div className="lang">
                                    <Globe />
                                <label>Eng</label>
                            </div>
                            <a href="" className="signin">Signup</a>
                        </div>
                    </section>
                </section>
            </header>
        </React.Fragment>
    )
}

export default Header