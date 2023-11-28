import React from 'react'
import Sidebar from '../components/dashboard/sidebar/sidebar'
import Navbar from '../components/dashboard/navbar/navbar'

const Layout = ({children}) => {
  return (
    <div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout