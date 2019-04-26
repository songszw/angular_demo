import { Component, OnInit, Input } from '@angular/core'
import { List } from 'src/domain/entities'
import { ListService } from '../../../../services/list/list.service'
import { TodoService } from '../../../../services/todo/todo.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  @Input() isCollapsed: boolean
  isVisible: boolean = false
  inputList: string = ''

  lists: List[]
  constructor(
    private listService: ListService,
    private todoService: TodoService
  ) {}

  ngOnInit() {}
  showModal(): void {
    this.isVisible = true
  }

  handleAddOk(): void {
    //确认添加

    this.isVisible = false
  }

  handleAddCancel(): void {
    // 取消添加

    this.isVisible = false
  }
  openAddList(): void {
    this.isVisible = true
  }
}
