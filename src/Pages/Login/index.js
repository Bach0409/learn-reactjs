import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCookie } from '../../Stores/Authentication/authenticationSlice'
import { setInfo } from '../../Stores/User/userSlice'
import { useNavigate } from "react-router-dom";

let forcusUserName = false
let forcusPassword = false

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('admin.training@powergatesoftware.com')
    const [password, setPassword] = useState('123123')

    const [txtValidateUserName, setTxtValidateUserName] = useState('')
    const [txtValidatePass, setTxtValidatePass] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const validateUserName = (submit = false) => {
        if (forcusUserName || submit) {
            if (userName.length == 0) {
                setTxtValidateUserName('Vui lòng nhập email!')
                return false
            }
            if (!userName.toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                setTxtValidateUserName('Định dạng không phải Email!')
                return false
            }
            setTxtValidateUserName('')
            return true
        }

    }

    const validatePassword = (submit = false) => {
        if (forcusPassword || submit) {
            if (password.length <= 0) {
                setTxtValidatePass('Vui lòng nhập mật khẩu')
                return false
            }
            if (password.length < 6) {
                setTxtValidatePass('Mật khẩu phải có ít hất 6 kí tự!')
                return false
            }
            // if (!/[A-Z]/.test(password[0])) {
            //     setTxtValidatePass('Mật khẩu phải có kí tự in hoa đầu tiên!')
            //     return
            // }
            if (password.length > 28) {
                setTxtValidatePass('Mật khẩu quá dài!')
                return false
            }
            setTxtValidatePass('')
            return true
        }
    }

    const submit = async () => {
        try {
            if (validateUserName() && validatePassword()) {
                setIsLoading(true)
                const res = await fetch('https://api.gearfocus.div4.pgtest.co/api/authentication/login', {
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email: userName,
                        password: password
                    })
                });
                const resJson = await res.json()
                if (resJson?.success) {
                    dispatch(setCookie(resJson?.user_cookie))
                    dispatch(setInfo(resJson?.user))
                    setIsLoading(false)
                    localStorage.setItem('user_cookie', resJson?.user_cookie);
                    navigate("../home", { replace: true });
                } else {
                    setIsLoading(false)
                    alert(resJson?.errors?.email)
                }
            }
        } catch (error) {
            setIsLoading(false)
            alert('Đã có lỗi xảy ra!')
        }
    }

    const TextError = ({ txt }) => {
        return (
            <p className="txtValidate" >{txt}</p>
        )
    }

    return (
        <>
            <div className="container" id="container">
                <p className="title" >Login</p>
                <input className="userName"
                    value={userName}
                    onChange={onChangeUserName}
                    type="email"
                    placeholder="Email"
                    onClick={() => {
                        if (!forcusUserName) {
                            forcusUserName = true
                        }
                    }}
                    onBlur={validateUserName}
                />
                <TextError txt={txtValidateUserName} />
                <input className="password"
                    value={password}
                    onChange={onChangePassword}
                    type="password"
                    placeholder="Password"
                    onClick={() => {
                        if (!forcusPassword) {
                            forcusPassword = true
                        }
                    }}
                    onBlur={validatePassword}
                />
                <TextError txt={txtValidatePass} />
                <span className="btSubmit" onClick={submit}>
                    <FontAwesomeIcon className="iconButton" icon={faArrowRightToBracket} />
                    <p className="txtButton" >Login</p>
                </span>
            </div>
            {
                isLoading ? <div className="containLoading" >
                    <div className="loading" >
                        <div className="loader"></div>
                    </div>
                </div> : <></>
            }
        </>
    )
};


export default Login;
