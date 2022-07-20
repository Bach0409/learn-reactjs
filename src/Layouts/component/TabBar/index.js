import React, { useRef, useImperativeHandle } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faUserGroup, faGlobe, faBookmark, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

let isShow = false

const TabBar = (props, ref) => {
    const { children } = props

    const refMenu = useRef(null)
    const refContent = useRef(null)

    const refTitle1 = useRef(null)
    const refTitle2 = useRef(null)
    const refTitle3 = useRef(null)
    const refTitle4 = useRef(null)

    function openNav() {
        refMenu.current.style.width = "256px";
        refContent.current.style.marginLeft = "256px";
        refTitle1.current.style.display = "block"
        refTitle2.current.style.display = "block"
        refTitle3.current.style.display = "block"
        refTitle4.current.style.display = "block"
        isShow = true
    }

    function closeNav() {
        refMenu.current.style.width = "56px";
        refContent.current.style.marginLeft = "56px";
        refTitle1.current.style.display = "none"
        refTitle2.current.style.display = "none"
        refTitle3.current.style.display = "none"
        refTitle4.current.style.display = "none"
        isShow = false
    }

    const onPress = () => {
        if (isShow) {
            closeNav()
        } else {
            openNav()
        }
    }

    useImperativeHandle(ref, () => ({
        onPress
    }), [])

    return (
        <div className="drawerTab" >
            <div ref={refMenu} className="sidenav">
                <div className="rownav" >
                    <div className="leftBlock">
                        <FontAwesomeIcon className="icon" icon={faBookmark} />
                        <p ref={refTitle1} className="titleNav" >Order</p>
                    </div>
                    <FontAwesomeIcon className="iconArrow" icon={faAngleLeft} />
                </div>
                <div className="rownav">
                    <div className="leftBlock">
                        <FontAwesomeIcon className="icon" icon={faTag} />
                        <p ref={refTitle2} className="titleNav" >Catalog</p>
                    </div>
                    <FontAwesomeIcon className="iconArrow" icon={faAngleLeft} />
                </div>
                <div className="rownav">
                    <div className="leftBlock">
                        <FontAwesomeIcon className="icon" icon={faUserGroup} />
                        <p ref={refTitle3} className="titleNav" >User</p>
                    </div>
                    <FontAwesomeIcon className="iconArrow" icon={faAngleLeft} />
                </div>
                <div className="rownav">
                    <div className="leftBlock">
                        <FontAwesomeIcon className="icon" icon={faGlobe} />
                        <p ref={refTitle4} className="titleNav" >Sales channels</p>
                    </div>
                    <FontAwesomeIcon className="iconArrow" icon={faAngleLeft} />
                </div>
            </div>
            <div ref={refContent} className="content" >
                {children}
            </div>
        </div>
    )
}

export default React.forwardRef(TabBar)
