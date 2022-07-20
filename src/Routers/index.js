import React, { useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from '../Stores/Authentication/authenticationSlice';
import Layout from "../Layouts";

const Router = () => {
  const dispatch = useDispatch()
  const cookie = useSelector(state => state.authentication.cookie)

  const getCookie = () => {
    const cookieLocalStorage = localStorage.getItem('user_cookie')
    dispatch(setCookie(cookieLocalStorage))
  }

  useEffect(() => {
    getCookie()
  }, [])

  return (
    <>
      <Routes>
        {publicRouter.map((screen, index) => (
          <Route
            key={index + 'publicRouter'}
            index={false}
            path={`/${screen?.path}`}
            element={screen?.element()} />
        ))}
        {
          cookie && <Route path='' element={<Layout />}>
            {privateRouter.map((screen, index) => {
              return (
                <Route
                  key={index + 'privateRouter'}
                  index={screen?.index ? true : false}
                  path={screen?.path}
                  element={screen?.element()}
                />
              )
            })}
          </Route>
        }
      </Routes>
    </>
  );
};

export default Router;
