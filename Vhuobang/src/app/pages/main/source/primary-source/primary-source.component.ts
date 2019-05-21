import { Component, OnInit } from '@angular/core'
import { SourceService } from '../../../../services/source/source.service'
import { AreaDataService } from '../../../../services/area_data/area-data.service'

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
              label: 'Zhong Hua Men'
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
  listOfData: any = []
  loading = true

  constructor(private primarySource: SourceService) {}

  primaryData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1
    }
    this.loading = true
    // 获取初级货源
    console.log('aaa')
    this.primarySource
      .getPrimaryData(this.companyName, this.from, this.to)
      .subscribe((data: any) => {
        if (data.code === 0) {
          console.log(data)
          this.loading = false
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
    //点击查询
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
  onChanges(values: any): void {
    // console.log('aaabbb', values)
  }

  loadData(node: any, index: number): PromiseLike<any> {
    // console.log('aaa', window.location.origin)

    // let provinceUrl: string =
    //   'http://localhost:4200/test' + '/address/province.do?t=' + Date.now()
    // console.log(provinceUrl)

    // this.areaData.getProviceData().subscribe((data: any) => {
    //   console.log('data:', data)
    // })
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          node.children = [
            {
              value: 'zhejiang',
              label: 'Zhejiang'
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu'
            }
          ]
        } else if (index === 0) {
          console.log(index)
          // const cities: {
          //   [key: string]: Array<{
          //     value: string
          //     label: string
          //     isLeaf?: boolean
          //   }>
          // } = {
          //   zhejiang:
          //   ,
          //   jiangsu: [
          //     {
          //       value: 'nanjing',
          //       label: 'Nanjing'
          //     }
          //   ]
          // }
          // console.log(node.value)

          node.children = [
            {
              value: 'hangzhou',
              label: 'Hangzhou'
            },
            {
              value: 'ningbo',
              label: 'Ningbo',
              isLeaf: true
            }
          ]
        } else {
          // console.log(index)
          node.children = [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              isLeaf: true
            },
            {
              value: 'ningbo',
              label: 'Ningbo',
              isLeaf: true
            }
          ]
          // node.children = scenicspots[node.value]
        }
        resolve()
      }, 1000)
    })
  }
}
