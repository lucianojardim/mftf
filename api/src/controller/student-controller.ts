import {JsonController, Get, Post, Param, Delete, Body, Authorized, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {RunResult} from "sqlite3";

import {StudentRepository} from "../repository/student-repository";
import {Student} from "../model/student.model";

// let cors = require("cors");
// let whitelist = ['localhost', 'mftf-ui']
// let corsOptionsDelegate = function (req: any, callback: any) {
//   let corsOptions;
//   console.log(req.header('Origin'))
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response 
//   }else{
//     corsOptions = { origin: false } // disable CORS for this request 
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options 
// }

@Service()
@JsonController()
@Authorized()
// @UseBefore(cors(corsOptionsDelegate))
export class StudentController {

    constructor(private _studentRepository: StudentRepository) {
    }

    // @Authorized()
    @Get("/students")
    findAll(): Promise<Student[]> {
        return this._studentRepository.findAll();
    }

    // @Authorized()
    @Get("/students/:studentId")
    findOne(@Param("studentId") studentId: number): Promise<Student> {
        return this._studentRepository.findOne(studentId);
    }

    // @Authorized()
    @Post("/students")
    save(@Body() student: Student): Promise<boolean> {
        this._studentRepository.save(student)
            .then(
                (runResult: RunResult) => {
                    if (runResult.changes > 0) {
                        return Promise.resolve(true);
                    }
                })
            .catch((err: Error) => {
                return Promise.reject(err)
            });
        return Promise.resolve(true);
    }

    // @Authorized()
    @Delete("/students/:studentId")
    remove(@Param("studentId") studentId: number): Promise<boolean> {
        this._studentRepository.remove(studentId)
            .then(
                (runResult: RunResult) => {
                    if (runResult.changes > 0) {
                        return Promise.resolve(true);
                    }
                })
            .catch((err: Error) => {
                return Promise.reject(err)
            });
        return Promise.resolve(true);
    }

}