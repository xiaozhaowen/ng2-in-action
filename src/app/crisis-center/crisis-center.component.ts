import {Component} from '@angular/core';

/**
 * 此组件是危机中心业务模块的根，是管理此业务模块的壳
 * 没有任何业务逻辑
 * 没有在注解的元数据中指定选择器，因为不需要在任何父组件中嵌套，是路由导航而来
 */
@Component({
  template: `
    <h2>危机中心</h2>
    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent {

}
