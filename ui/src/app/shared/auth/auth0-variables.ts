import { environment } from '../../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'mZXTiqdJLdttBCobi3Cx5YNfzgWV91m6',
  domain: 'mftfapi.auth0.com',
  callbackURL: environment.authenticationCallback
};
