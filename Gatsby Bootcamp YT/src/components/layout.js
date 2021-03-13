import React from 'react'
import '../styles/index.scss'

import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout