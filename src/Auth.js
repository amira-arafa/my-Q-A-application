import auth0 from 'auth0-js';

class Auth {
  constructor() {
      //getting information about user and token from auth0
    this.auth0 = new auth0.WebAuth({
        domain: 'dev--yzyljqx.auth0.com',
            audience: 'https://dev--yzyljqx.auth0.com/userinfo',
            clientID: 'uz0oB6GhhHRx0rM7PQ5gfCFkaHzAOWDj',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'id_token',
            scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  //methods to get info about user profile
  getProfile() {
    return this.profile;
  }
  //method to get the token of the user
  getIdToken() {
    return this.idToken;
  }
  //this method check whether the user is authenticated or not
  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }
  //method to make user signed in
  signIn() {
    this.auth0.authorize();
  }
  //promise based method to get the token and profile of user if authenticated and get error if not
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    })
  }
  //sign out method to clear any user information
  signOut() {
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
  }
}

const auth0Client = new Auth();

export default auth0Client;
