import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const RootLayout = () => {
  return (
    <main className='main'>
        <Sidebar />
        <Outlet />
    </main>
  )
}

export default RootLayout