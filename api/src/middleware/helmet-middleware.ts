import * as express from "express";
import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

let helmet = require('helmet');

@Middleware({ type: "before", priority: 300 })
export class HelmetMiddleware implements ExpressMiddlewareInterface {
   use(request: express.Request, response: express.Response, next?: (err?: express.Errback) => express.Errback): any {
    helmet()(request, response, next);
  }
}