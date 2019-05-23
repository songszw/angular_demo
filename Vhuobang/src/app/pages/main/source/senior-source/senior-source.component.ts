import { Component, OnInit } from '@angular/core'
import { formatDate } from '../../../../../utils/common'
import { SourceService } from 'src/app/services/source/source.service'

@Component({
  selector: 'app-senior-source',
  templateUrl: './senior-source.component.html',
  styleUrls: ['./senior-source.component.styl']
})
export class SeniorSourceComponent implements OnInit {
  material: string = ''
  startDate = null
  startValue: any = ''
  endDate = null
  endValue: any = ''
  pageIndex: number = 1
  pageSize: number = 3
  total = 1
  seniorData = []
  sourceStatus: any = [
    {
      value: '',
      label: '全部货源'
    },
    {
      value: '0',
      label: '待匹配'
    },
    {
      value: '1',
      label: '匹配中'
    },
    {
      value: '2',
      label: '匹配完成'
    },
    {
      value: '3',
      label: '已失效'
    }
  ]
  goodsState: string = ''

  constructor(private getData: SourceService) {}

  ngOnInit() {
    this.getSeniorList()
  }
  getMenuItem(e: any): void {
    // console.log(e)
    this.goodsState = e
    this.material = ''
    this.startValue = ''
    this.endValue = ''
    this.startDate = null
    this.endDate = null
    this.pageIndex = 1
    this.getSeniorList()
  }

  startDateChange(result: Date): void {
    if (result) {
      this.startValue = formatDate('yyyy-MM-dd', result)
    } else {
      this.startValue = ''
    }
  }
  endDateChange(result: Date): void {
    if (result) {
      this.endValue = formatDate('yyyy-MM-dd', result)
    } else {
      this.endValue = ''
    }
  }

  //查询
  handleSearchClick() {
    this.getSeniorList()
    console.log(this.startValue, this.endValue, this.material, this.goodsState)
  }
  // 获取数据
  getSeniorList() {
    this.getData
      .getSeniorData(
        this.material,
        this.startValue,
        this.endValue,
        this.goodsState,
        this.pageIndex
      )
      .subscribe((data: any) => {
        if (data.code === 0) {
          let desc = data.data.result
          this.total = desc.total
          this.pageIndex = desc.pageNum
          this.pageSize = desc.pageSize
          this.seniorData = desc.result
          console.log(desc)
        }
      })
  }
}
