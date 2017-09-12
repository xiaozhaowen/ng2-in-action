import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavSubject} from '../shared/subject';
@Component({
  templateUrl: './basement.component.html',
  styles: [`a {
    color: blue;
    cursor: pointer;
  }`]
})
export class BasementComponent implements OnInit {

  subjects: NavSubject[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subjects = [];
  }

  ngOnInit() {
    this.subjects.push({name: 'dataBinding', remark: '数据绑定'});
    this.subjects.push({name: 'communication', remark: '组件通信'});
    this.subjects.push({name: 'directive', remark: '指令'});
    this.subjects.push({name: 'http', remark: 'http'});
    this.subjects.push({name: 'ctxmenu', remark: '右键'});
    this.subjects.push({name: 'office-ctx', remark: '官方右键例子'});


  }

  onSelect(subject: string) {
    // console.log(subject);
    // 使用相对路径导航
    this.router.navigate([subject], {relativeTo: this.route});
  }
}




