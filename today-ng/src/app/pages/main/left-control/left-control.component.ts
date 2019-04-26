import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { LocalStorageService } from 'src/app/services/local-storage.service'
import { USERNAME } from '../../../services/local-storage.namespace'
import { ListComponent } from './list/list.component'
@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.styl']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean
  @ViewChild(ListComponent) ListComponent: ListComponent
  username: string
  constructor(private store: LocalStorageService) {}

  ngOnInit() {
    this.username = this.store.get(USERNAME)
  }
  handleOpenAddList() {
    //调用子组件list中的打开添加列表方法
    this.ListComponent.openAddListModal()
  }
}
