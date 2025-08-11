import React from "react"
import '@/styles/globals.css'
import  Provider  from '@/components/Session/Provider'




export const metadata = {
    metadatabase: new URL(process.env.SITE_URL)
}

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <html >
                <body>
                    <Provider>
                        {children}
                    </Provider>
                </body>
            </html>
        </React.Fragment>
    )
}

export default layout
