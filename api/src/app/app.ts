import * as express from 'express';

import 'reflect-metadata';
import { Action, createExpressServer, useContainer, useExpressServer } from 'routing-controllers';
import { Container } from "typedi";

const jwt = require("express-jwt");
const rsaValidation = require("auth0-api-jwt-rsa-validation");

const morgan = require("morgan");

const cors = require("cors");

const helmet = require("helmet");

const compression = require("compression");

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

const app = express();

app.use(morgan("combined"));

app.use(helmet());

const jwtCheck = jwt({
    secret: rsaValidation(),
    algorithms: ["RS256"],
    issuer: "https://mftfapi.auth0.com/",
    audience: "mftfapi"
});
app.use(jwtCheck);

app.use(compression());

// const whitelist = ['localhost', 'mftf-ui'];
// const corsOptions = {
//   origin: function (origin: any, callback:any) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }
const corsOptions = "*";
app.use(cors(corsOptions));

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = useExpressServer(app, {
    authorizationChecker: async (action: Action, roles: string[]) => {
        let authorize: boolean = false;
        const permissions = ["write:students"];
        for (var i = 0; i < permissions.length; i++) {
            if (action.request.user.scope.includes(permissions[i])) {
                authorize = true;
            } else {
                authorize = false;
            }
        }
        return Promise.resolve(authorize);
    },
    // currentUserChecker: async (action: Action) => {
    //     // here you can use request/response objects from action
    //     // you need to provide a user object that will be injected in controller actions
    //     // demo code:
    //     const token = action.request.headers["authorization"];
    //     return getEntityManager().findOneByToken(User, token);
    // },
    controllers: [
        __dirname + "/controller/**/*.js"
    ]
});

/**
 * Start the express app.
 */
expressApp.listen(process.env.PORT || 3000);
console.log("Server is up and running at port " + (process.env.PORT || 3000));
