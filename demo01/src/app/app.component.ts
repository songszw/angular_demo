import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.styl'] // css
})
export class AppComponent {
  title = 'demo01'; // 定义属性
  constructor(){ // 构造函数
  }
}
