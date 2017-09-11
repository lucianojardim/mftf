import "reflect-metadata";
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import {StudentController} from "./controller/student-controller";

let cors = require("cors");
let compression = require("compression");

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     */
    cors: true,
    /**
     * Here we specify what controllers should be registered in our express server.
     */
    controllers: [
        StudentController
    ]
});

/**
 * Start the express app.
 */
expressApp.use(compression());
expressApp.listen(process.env.PORT || 3000);
console.log("Server is up and running at port "+ (process.env.PORT || 3000) );
