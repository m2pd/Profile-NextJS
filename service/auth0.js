import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'


class auth0 {

  isAuthenticated() {
    const expiresAt = Cookies.getJSON('expiresAt')
    return new Date().getTime() < expiresAt
  }

    verifyToken(token) {
    if(token) {
      const decodedToken = jwt.decode(token);
      const expiresAt = decodedToken.exp + 1000;

      return (decodedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
    }

    return undefined;
  }

  clientAuth() {
    const token = Cookies.getJSON('jwt');
    const tokenRaw = token.__raw;
    const verifiedToken =  this.verifyToken(tokenRaw)

    return token;
  }

  serverAuth = (req) => {
    if (req.headers.cookie) {
      // const expiresAtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith('expiresAt='))

      // const cookies = req.headers.cookie;
      // console.log({ cookies })
      // const splitCookie = cookies.split(';')
      // console.log({ splitCookie })
      // const expiresAtCookie = splitCookie.find(c => c.trim().startsWith('expiresAt='));
      // console.log({ expiresAtCookie })
      // const expiresAtArray = expiresAtCookie.split("=")
      // console.log({ expiresAtArray })
      // const expiresAt = expiresAtArray[1];
      // console.log({ expiresAt })

      // if (!expiresAtCookie) { return undefined }

      // const expiresAt = expiresAtCookie.split("=")[1]

      const tokenCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt="));
      
      if(!tokenCookie) { return undefined }

      const token = tokenCookie.split("=")[1];
      const verifiedToken = this.verifyToken(token.__raw)

      // console.log(JSON.parse(token))
      return verifiedToken; 
    }

    return undefined;
  }
}

export default new auth0();

