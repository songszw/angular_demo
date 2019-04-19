import { Component, OnInit } from '@angular/core'

import { LocalStorageService } from '../../services/localStorage/local-storage.service'
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE
} from '../../services/localStorage/local-storage.namespace'
import { getTodayTime } from '../../../utils/time'

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.styl']
})
export class SetupComponent implements OnInit {
  public username: string
  constructor(private store: LocalStorageService) {}
  ngOnInit() {}

  completeSetup(): void {
    this.store.set(INIT_FLAG, true)
    this.store.set(START_USING_DATE, getTodayTime())
    this.store.set(USERNAME, this.username)
  }
}
