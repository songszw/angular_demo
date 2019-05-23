import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.styl']
})
export class SiderComponent implements OnInit {
  menulist: any = []

  constructor() {}

  ngOnInit() {
    this.menulist = JSON.parse(localStorage.getItem('menulist'))
    // console.log('aaa', this.menulist)
  }
}
