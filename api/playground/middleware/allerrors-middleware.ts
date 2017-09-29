import * as express from 'express';
import {Middleware, ExpressErrorMiddlewareInterface,ForbiddenError} from "routing-controllers";

@Middleware({ type: "before" })
export class AllErrorsMiddleware implements ExpressErrorMiddlewareInterface {
  error(error: express.Errback, request: express.Request, response: express.Response, next?: Function): void {
  //     console.log("Error handled: ", error);
  //     if (error.name === 'UnauthorizedError') {
  //       response.status(401).json({ message: 'Missing or invalid token' });
  //     }
  next(error);
  }
}
