import * as express from "express";
import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

let cors = require("cors");

@Middleware({ type: "before", priority: 200 })
export class CorsMiddleware implements ExpressMiddlewareInterface {
   use(request: express.Request, response: express.Response, next?: (err?: express.Errback) => express.Errback): any {
    // let corsOptions = {
    //     origin: ["localhost","https:mftf-ui.herokuapp.com"]
    // };
    (cors)(request, response, next);
  }
}
