import { Component, HostBinding, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorageService } from '../../services/localStorage/local-storage.service'
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE
} from '../../services/localStorage/local-storage.namespace'
import { getTodayTime } from '../../../utils/time'
import { setupTransition } from '../setup/setup.animation'

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.styl'],
  animations: [setupTransition]
})
export class SetupComponent implements OnInit {
  @HostBinding('@setupTransition') state = 'activated'
  public username: string
  constructor(private store: LocalStorageService, private router: Router) {}
  ngOnInit() {}

  completeSetup(): void {
    this.store.set(INIT_FLAG, true)
    this.store.set(START_USING_DATE, getTodayTime())
    this.store.set(USERNAME, this.username)
    this.router.navigateByUrl('main')
  }
}
