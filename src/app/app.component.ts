import { Component } from '@angular/core';

/**
 * 组件本身就是一个类，然后有一些方法和属性，用于和对应html模板交互
 * 但是我们需要告知angular这个类是一个组件，怎么告诉？使用注解
 * 注解是一个函数，接收一个对象参数
 */
@Component({
  // 组件的选择器，对应到html中就是<app-root></app-root>
  selector: 'app-root',
  // 组件对应的html模板文件
  templateUrl: './app.component.html',
  // 组件对应的css文件数组
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
