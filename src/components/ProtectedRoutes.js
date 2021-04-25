import React, { useState, useEffect, useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom';
import configData from './config.json'
import { useSelector } from "react-redux"

function redirectToLogin(routes) {
    window.location.href =
        `https://accounts.codes/lobby/login`;
    return null
}
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    const Data = useSelector(state => state.staticDetailsReducer)
    const TokenToString = Data.jwt
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let userName = rest.computedMatch.params.userName;
    useEffect(() => {
        const isLocal = window.location.hostname == "localhost"
        const url = `${configData.BASE_URL}${userName}/isPermission?isLocal=${isLocal}`;
        const isPermission = async () => {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: TokenToString,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            if (response.status == 401) {
                setIsLoading(false)
                setIsLoggedIn(true)
            }
            else {
                setIsLoading(false)
            }
        }
        isPermission()
    }, [])

    return isLoading ? null : isLoggedIn ?
        redirectToLogin()
        : <Route {...rest} render={props => { return <Component {...rest} {...props} /> }} />
}
export default ProtectedRoute
