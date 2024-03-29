import { Component, HostBinding, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd'
import { SummaryService } from './summary.service'
import { pageSwitchTransition } from './summary.animations'
import { LocalStorageService } from '../../services/localStorage/local-storage.service'
import {
  START_USING_DATE,
  USERNAME
} from '../../services/localStorage/local-storage.namespace'
import { getTodayTime, ONE_DAY } from '../../../utils/time'
import { Summary } from '../../../domain/entities'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.styl'],
  animations: [pageSwitchTransition]
})
export class SummaryComponent implements OnInit {
  username = this.store.get(USERNAME) || 'username'
  dateCount = Math.floor(
    (getTodayTime() - this.store.get(START_USING_DATE)) / ONE_DAY + 1
  )

  @HostBinding('@pageSwitchTransition') private state = 'activated'

  constructor(
    private summaryService: SummaryService,
    private store: LocalStorageService,
    private router: Router,
    private noti: NzNotificationService
  ) {}

  ngOnInit() {
    this.summaryService.doSummary()
  }

  requestForDate(date: Date): Summary | null {
    return this.summaryService.summaryForDate(date.getTime())
  }

  showSummaryDetail(summary: Summary): void {
    if (!summary) {
      return
    }

    const { cCount, uCount } = summary
    if (uCount) {
      this.noti.error(
        '有未完成的项目',
        `你完成了全部任务的 ${cCount / (cCount + uCount)}%`
      )
    } else if (cCount) {
      this.noti.success('完成了这一天的全部任务', '干得漂亮')
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/main')
  }
}
