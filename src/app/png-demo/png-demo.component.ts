import {Component, OnInit} from '@angular/core';
import {NavSubject} from '../shared/subject';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-png-demo',
  templateUrl: './png-demo.component.html',
  styleUrls: ['./png-demo.component.css']
})
export class PngDemoComponent implements OnInit {

  subjects: NavSubject[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subjects = [];
  }

  ngOnInit() {
    this.subjects.push({name: 'buttons', remark: '按钮'});
    this.subjects.push({name: 'context-menu', remark: '右键'});
  }

  doSelect(subject: string) {
    this.router.navigate([subject], {relativeTo: this.route});
  }
}
