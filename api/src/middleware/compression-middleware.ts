import * as express from "express";
import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

let compression = require("compression");

@Middleware({ type: "before", priority: 100 })
export class CompressionMiddleware implements ExpressMiddlewareInterface {
  use(request: express.Request, response: express.Response, next?: (err?: express.Errback) => express.Errback): any {
    compression()(request, response, next);
  }
}
