import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable()
export class StudentService {

  constructor() {
  }

  getStudents(): Promise<Student[]> {
    const studentList: Student[] = [
      {id: 1, name: '李逵'},
      {id: 2, name: '林冲'},
      {id: 3, name: '花荣'},
      {id: 4, name: '武松'}
    ];
    return Promise.resolve(studentList);
  }
}
