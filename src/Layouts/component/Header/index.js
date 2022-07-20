import React from 'react'
import "./index.css";
import { useNavigate } from 'react-router-dom';

const Header = ({ onClick }) => {
    let navigate = useNavigate();

    const onClickTitle = () => {
        navigate('/');
    }

    return (
        <nav className='header' >
            <div onClick={onClick} className='leftHeader' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                        <g data-name="menu">
                            <rect fill='#b4b4db' width="24" height="24" transform="rotate(180 12 12)" opacity="0">
                            </rect>
                            <rect fill='#b4b4db' x="3" y="11" width="18" height="2" rx=".95" ry=".95">
                            </rect>
                            <rect fill='#b4b4db' x="3" y="16" width="18" height="2" rx=".95" ry=".95">
                            </rect>
                            <rect fill='#b4b4db' x="3" y="6" width="18" height="2" rx=".95" ry=".95">
                            </rect>
                        </g>
                    </g>
                </svg>

                <div className='line' ></div>
                <a onClick={onClickTitle} className='title' >Gear Focus Admin</a>

                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                        <g data-name="bell">
                            <rect fill='#ffffff' width="24" height="24" opacity="0">
                            </rect>
                            <path fill='#ffffff' d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>

            <div className='rightHeader' >
                <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="24px" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                        <g data-name="person">
                            <rect fill='#b4b4db' width="24" height="24" opacity="0">
                            </rect>
                            <path fill='#b4b4db' d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z">
                            </path>
                            <path fill='#b4b4db' d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        </nav>
    )
}


export default Header