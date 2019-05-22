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
  startValue: any = ''
  endValue: any = ''
  goodsState: string = ''
  pageIndex: number = 1
  pageSize: number = 3
  total = 1
  seniorData = []

  constructor(private getData: SourceService) {}

  ngOnInit() {
    this.getSeniorList()
  }

  //查询
  handleSearchClick() {
    this.startValue = formatDate('yyyy-MM-dd', this.startValue)
    this.endValue = formatDate('yyyy-MM-dd', this.endValue)
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
