import * as express from 'express';

import 'reflect-metadata';
import { Action, createExpressServer, MiddlewareMetadata, useContainer, useExpressServer } from 'routing-controllers';
import { Container } from "typedi";

let jwt = require("express-jwt");
let rsaValidation = require("auth0-api-jwt-rsa-validation");

let morgan = require("morgan");
// let fs = require("fs");
// let path = require("path");
// let rfs = require("rotating-file-stream");

let cors = require("cors");

let helmet = require("helmet");

let compression = require("compression");

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

const app = express();

/**
 * Define logging
 */
// const logDirectory = path.join(__dirname, 'log')
// // ensure log directory exists 
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// // create a rotating write stream 
// const accessLogStream = rfs('access.log', {
//     interval: '1d', // rotate daily 
//     maxFiles: 3,
//     path: logDirectory
//   });
// app.use(morgan("combined", {stream: accessLogStream}));
app.use(morgan("combined"));

app.use(helmet());

const jwtCheck = jwt({
    secret: rsaValidation(),
    algorithms: ["RS256"],
    issuer: "https://mftfapi.auth0.com/",
    audience: "mftfapi"
});
app.use(jwtCheck);
// , function (err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) {
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).json({ message: 'Missing or invalid token' });
//     }
//     res.sendStatus(200);
// });
// If we do not get the correct credentials, we’ll return an appropriate message
// app.use(function (err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) {
//     if (err.name === 'UnauthorizedError') {
//       res.status(401).json({message:'Missing or invalid token'});
//     }
//   });

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
