import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import TabBar from './component/TabBar'

const Layout = () => {
    const refTab = useRef(null)

    const onClick = () => {
        refTab.current.onPress()
    }

    return (
        <div>
            <Header onClick={onClick} />
            <TabBar ref={refTab} >
                <Outlet />
            </TabBar>
        </div>
    )
}

export default Layout