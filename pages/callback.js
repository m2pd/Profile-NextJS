import React, { useEffect } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/layouts/BasePage'
import { useAuth0 } from "@auth0/auth0-react";
import Router from 'next/router'
import Cookies from 'js-cookie'

const CallBack = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
  // console.log({ user, isAuthenticated, isLoading })
  // console.log(useAuth0())
  // useAuth0().getIdTokenClaims().then(res => {
  //   // let expireAt = JSON.stringify((res.exp) * 1000 + new Date().getTime()) || 0;
  //   console.log('getIdTokenClaims', res)
  //   // console.log('expireAt', res.exp)
  // })
  // useAuth0().getAccessTokenSilently().then(res => console.log('getAccessTokenSilently', res))
  // useAuth0().getAccessTokenWithPopup().then(res => console.log('getAccessTokenWithPopup', res))

  const handleAuthentication = () => {
    getIdTokenClaims().then(res => setSession(res))
    // getAccessTokenSilently().then(res => console.log(res))
  }

  const setSession = (authResult) => {
    const idToken = authResult.aud;
    const expireAt = JSON.stringify((authResult.exp) * 1000 + new Date().getTime());
    // console.log({ idToken, expireAt })
idToken
    Cookies.set('user', idToken)
    Cookies.set('jwt', authResult)
    Cookies.set('expiresAt', expireAt)

  }

  useEffect(() => {
    if (!isLoading) {
      handleAuthentication();

      Router.push('/')
    }

  }, [isLoading])

  if (isLoading) {
    return (
      <div>
        <h1>Verifying login data ...</h1>
      </div>
    );
  } else {
    return (
      isAuthenticated && (
        <BaseLayout>
          <div className="main-section">
            <BasePage>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </BasePage>
          </div>
        </BaseLayout>
      )
    )
  }

}

export default CallBack
