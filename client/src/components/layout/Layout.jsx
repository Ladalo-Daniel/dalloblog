import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../topbar/TopBar'
import Footer from '../footer/Footer'

export default function Layout() {
  return (
    <div>
       <TopBar />
         <main>
            <Outlet />
         </main>
       <Footer />
    </div>
  )
}
