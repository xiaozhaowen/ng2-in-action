import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../data-factory/student.service';
import {Student} from '../../data-factory/student';

@Component({
  selector: 'app-bm-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  playerName = '勒布朗詹姆斯';
  classes = 'container error';
  girlImageUrl = 'assets/images/girl.jpg';
  isUnchanged = false;

  studentList: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.studentService.getStudents().then((list) => this.studentList = list);
  }

}
