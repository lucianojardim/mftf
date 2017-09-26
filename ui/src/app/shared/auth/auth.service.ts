import { never } from '@angular/cli/node_modules/rxjs/observable/never';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AUTH_CONFIG } from './auth0-variables';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  private _auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: 'mftfapi',
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: 'openid  write:students'
  });

  private _educationUnitsUsersAllowed: string[] = [];

  constructor(private _router: Router) {}

  public login(): void {
    this._auth0.authorize({
      connection: 'google-oauth2' // Only Google login allowed
    });
  }

  public handleAuthentication(): void {
    this._auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this._router.navigate(['/students'])
          .then()
          .catch();
      } else if (err) {
        this._router.navigate(['/failedauthentication'])
          .then()
          .catch();
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000 * 5) + new Date().getTime()); // 2h * 5 = 10h
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('sub', authResult.idTokenPayload.sub);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this._router.navigate(['/'])
      .then()
      .catch();
  }

  public isAuthenticated(): Promise<boolean> {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Promise.resolve(new Date().getTime() < expiresAt);
  }

  /**
   * getAuthorizedEducationUnits
   */
  async getAuthorizedEducationUnits(): Promise<string[]> {
    const auth0Manage = new auth0.Management({
      domain: AUTH_CONFIG.domain,
      token: localStorage.getItem('id_token')
    });
    return new Promise<string[]>( (resolve, reject) =>
    auth0Manage.getUser(localStorage.getItem('sub'), (error, profile) => {
      if (error) {
        console.log(error);
        this._educationUnitsUsersAllowed = [];
        reject(error);
      } else {
        this._educationUnitsUsersAllowed = profile.app_metadata.unidades;
        resolve(this._educationUnitsUsersAllowed)
      }
    }));
  }

}
