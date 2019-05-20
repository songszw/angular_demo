import { Component, OnInit } from '@angular/core'
import { SourceService } from '../../services/source/source.service'

@Component({
  selector: 'app-primary-source',
  templateUrl: './primary-source.component.html',
  styleUrls: ['./primary-source.component.styl']
})
export class PrimarySourceComponent implements OnInit {
  options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }
          ]
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ]
  fromAddress: any[]
  toAddress: any[]
  from: string = ''
  to: string = ''
  companyName: string = ''
  pageIndex: number = 1
  pageSize: number = 20
  total: number = 1
  listOfData = []

  constructor(private primarySource: SourceService) {}

  primaryData(): void {
    console.log('aaa')
    this.primarySource
      .getPrimaryData(this.companyName, this.from, this.to)
      .subscribe((data: any) => {
        if (data.code === 0) {
          console.log(data)
          let desc = data.data.pagination
          this.pageIndex = desc.pageNum
          this.pageSize = desc.pageSize
          this.total = desc.total
          this.listOfData = desc.result
          console.log(this.listOfData)
        }
      })
  }
  handleSearchClick() {
    console.log(
      'companyname:',
      this.companyName,
      'fromAddress:',
      this.from,
      'toAddress:',
      this.to
    )
    this.primaryData()
  }
  changeFromAddress(values: any): void {
    this.from = ''
    values.forEach(element => {
      this.from += element + ','
    })
    this.from = this.from.substring(0, this.from.length - 1)
  }
  changeToAddress(values: any): void {
    this.to = ''
    values.forEach(element => {
      this.to += element + ','
    })
    this.to = this.to.substring(0, this.to.length - 1)
  }
  ngOnInit(): void {
    this.primaryData()
  }
}
