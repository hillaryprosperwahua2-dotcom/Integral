import React from "react"
import '@/styles/globals.css'




export const metadata = {
    metadatabase: new URL(process.env.SITE_URL)
}

const layout = ({ children }) => {
    return (
        <React.Fragment>

            <body>
                {children}
            </body>

        </React.Fragment>
    )
}

export default layout
