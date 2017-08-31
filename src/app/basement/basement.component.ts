import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  templateUrl: './basement.component.html',
  styles: [`a {
    color: blue;
    cursor: pointer;
  }`]
})
export class BasementComponent {
  constructor(private router: Router, private route: ActivatedRoute,) {
  }

  onSelect(subject: string) {
    // console.log(subject);
    // 使用相对路径导航
    this.router.navigate([subject], {relativeTo: this.route});
  }
}
