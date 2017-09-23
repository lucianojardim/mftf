import * as express from "express";
import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

let morgan = require('morgan');

@Middleware({ type: "before", priority: 500 })
export class MorganMiddleware implements ExpressMiddlewareInterface {
   use(request: express.Request, response: express.Response, next?: (err?: express.Errback) => express.Errback): any {
    morgan('combined')(request, response, next);
  }
}
