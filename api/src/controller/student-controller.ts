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
    save(@Body() student: Student): Promise<RunResult> {
        return this.studentRepository.save(student);
    }

    @Delete("/students/:studentId")
    remove(@Param("studentId") studentId: number): Promise<RunResult> {
        return this.studentRepository.remove(studentId);
    }

}