import * as express from "express";
import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

let jwt = require("express-jwt");
let jwks = require('jwks-rsa');
let rsaValidation = require('auth0-api-jwt-rsa-validation');

@Middleware({ type: "before", priority: 400 })
export class JwtMiddleware implements ExpressMiddlewareInterface {
   use(request: express.Request, response: express.Response, next?: (err?: express.Errback) => express.Errback): any {
    jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: "https://mftfapi.auth0.com/.well-known/jwks.json"
        }),
        audience: 'mftfapi', //unique identifier from the auth0 MFTF API
        issuer: "https://mftfapi.auth0.com/",
        algorithms: ['RS256']
    })(request, response, next);
  }
}
