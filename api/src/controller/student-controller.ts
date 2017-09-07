import {JsonController, Get, Post, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {RunResult} from "sqlite3";

import {StudentRepository} from "../repository/student-repository";
import {Student} from "../model/student.model";

@Service()
@JsonController()
export class StudentController {

    constructor(private studentRepository: StudentRepository) {
    }

    @Get("/students")
    findAll(): Promise<Student[]> {
        return this.studentRepository.findAll();
    }

    @Get("/students/:studentId")
    findOne(@Param("studentId") studentId: number): Promise<Student> {
        return this.studentRepository.findOne(studentId);
    }

    @Post("/students")
    save(@Body() student: Student): Promise<boolean> {
        this.studentRepository.save(student)
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

    @Delete("/students/:studentId")
    remove(@Param("studentId") studentId: number): Promise<boolean> {
        this.studentRepository.remove(studentId)
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