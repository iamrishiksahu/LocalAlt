import React from 'react'
import { Outlet } from 'react-router-dom'

const VendorHeader = () => {
    return (
        <div>VendorHeader
            <Outlet />
        </div>
    )
}

export default VendorHeader