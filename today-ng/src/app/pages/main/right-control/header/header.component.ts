import { Component, OnInit } from '@angular/core'
import { Subscription, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { RankBy } from '../../../../../domain/type'
import { ListService } from '../../../../services/list/list.service'
import { TodoService } from '../../../../services/todo/todo.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  private listTitle$: Subscription
  private unsubscribe$ = new Subject<void>()

  listTitle = ''
  completedHide = false

  constructor(
    private listService: ListService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.listService.current$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        this.listTitle = list ? list.title : ''
      })
    this.todoService.completedHide$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(hide => (this.completedHide = hide))
  }

  switchRankType(e: RankBy): void {
    this.todoService.toggleRank(e)
    console.log(e)
  }
  toggleCompletedHide(): void {
    this.todoService.toggleCompletedHide(!this.completedHide)
  }
}
