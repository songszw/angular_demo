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
  pageIndex = 1
  pageSize = 20
  total = 1
  listOfData = []

  constructor(private primarySource: SourceService) {}

  primaryData(): void {
    this.primarySource
      .getPrimaryData(this.companyName, this.from, this.to)
      .subscribe((data: any) => {
        console.log(data)
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
