import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.styl']
})
export class QuickAddComponent implements OnInit {
  @Output() add = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}
  addTodo(title: string) {
    if (title) {
      this.add.next(title)
    }
  }
}
