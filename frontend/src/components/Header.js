import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <p>HEader</p>
        <Outlet />
    </div>
  )
}

export default Header