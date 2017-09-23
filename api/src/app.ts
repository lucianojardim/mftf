import { CorsMiddleware } from './middleware/cors-middleware';
import * as express from 'express';

import 'reflect-metadata';
import { Action, createExpressServer, MiddlewareMetadata, useContainer, useExpressServer } from 'routing-controllers';
import {Container} from "typedi";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = createExpressServer({
    authorizationChecker: async (action: Action, roles: string[]) => {
        let authorize: boolean = false;
        const permissions = ["test"];
        for (var i = 0; i < permissions.length; i++) {
            if (action.request.user.scope.includes(permissions[i])) {
                authorize = true;
            } else {
                authorize = false;
            }
        }
        return authorize;
    },
    // currentUserChecker: async (action: Action) => {
    //     // here you can use request/response objects from action
    //     // you need to provide a user object that will be injected in controller actions
    //     // demo code:
    //     const token = action.request.headers["authorization"];
    //     return getEntityManager().findOneByToken(User, token);
    // },
    cors: true,

    controllers: [
        __dirname + "/controller/**/*.js"
    ],
    middlewares: [
        __dirname + "/middleware/**/*.js"
    ]
});

/**
 * Start the express app.
 */
expressApp.listen(process.env.PORT || 3000);
console.log("Server is up and running at port "+ (process.env.PORT || 3000) );
