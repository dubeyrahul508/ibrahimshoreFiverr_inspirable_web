import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";
import Router from "next/router";



const TOKEN_KEY = 'authToken'

export class AuthToken {
  constructor(token) {
   
    this.decodedToken = { email: "", exp: 0 };

    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

 static async storeToken (token){
      Cookie.set(TOKEN_KEY, token);
      await Router.push("/myaccount");
  }

  static async removeToken (){
     Cookie.remove(TOKEN_KEY);
     await Router.push("/")
  }


 static async getToken(){
   const token = await Cookie.get(TOKEN_KEY);
   console.log(token);
   return token
 }

  authorizationString() {
    return `Bearer ${this.token}`;
  }


  expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  isExpired() {
    return new Date() > this.expiresAt;
  }

  isValid() {
    return !this.isExpired;
  }
}
