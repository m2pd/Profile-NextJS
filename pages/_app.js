import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from '../service/auth0';


// const clientAuth = async () => {
//   const auth = await useAuth0.isAuthenticated();
//   // const auth = process.browser ? clientAuth() : serverAuth(ctx.req);
//   // const auth = serverAuthenticated();
//   return { auth }
// }

// const serverAuth = (req) => {
//   if (req.headers.cookie) {
//     // const expiresAtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith('expiresAt='))

//     const cookies = req.headers.cookie;
//     console.log({ cookies })
//     const splitCookie = cookies.split(';')
//     console.log({ splitCookie })
//     const expiresAtCookie = splitCookie.find(c => c.trim().startsWith('expiresAt='));
//     console.log({ expiresAtCookie })
//     const expiresAtArray = expiresAtCookie.split("=")
//     console.log({ expiresAtArray })
//     const expiresAt = expiresAtArray[1];
//     console.log({ expiresAt })

//     // if (!expiresAtCookie) { return undefined }

//     // const expiresAt = expiresAtCookie.split("=")[1]

//     return new Date().getTime() < expiresAt
//   }
// }
function MyApp({ Component, pageProps, auth }) {

  console.log({ auth })

  return (
    <Auth0Provider
      domain="dev-8kdqydy4.us.auth0.com"
      clientId="w7o30Ew4avrsAKWQFdxbm9s9VcoeJ2ep"
      redirectUri="http://localhost:3000/callback"
    >
      <Component {...pageProps} auth={auth} />
    </Auth0Provider>

  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  const user = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);
  // if (process.browser) {
  //   if (ctx.req.headers.cookie) {
  //     const expiresAtCookie = ctx.req.headers.cookie.split(";").find(c => c.trim().startsWith('expiresAt='))
  //     const expiresAt = expiresAtCookie.split("=")[1]
  //     const check = new Date().getTime() < expiresAt
  //     console.log({ expiresAt, check })
  //   }
  // }
   
  const auth = { user, isAuthenticated: !!user }

  return { auth }
}


export default MyApp
