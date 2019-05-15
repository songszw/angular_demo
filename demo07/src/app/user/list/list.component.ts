import { Component, OnInit } from '@angular/core'
import { UserlistService } from '../../services/userlist.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  pageIndex: number = 1
  pageSize: number = 3
  total = 1
  listOfData = []
  // loading = true
  // sortValue: string | null = null
  // sortKey: string | null = null

  // searchGenderList: string[] = []

  // sort(sort: { key: string; value: string }): void {
  //   this.sortKey = sort.key
  //   this.sortValue = sort.value
  //   this.searchData()
  // }

  constructor(private randomUserService: UserlistService) {}

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1
    }
    // this.loading = true

    this.randomUserService
      .getBillList(this.pageIndex, this.pageSize)
      .subscribe((data: any) => {
        let datalist = data.data.factoryList
        this.total = datalist.total
        this.listOfData = datalist.result
        console.log(datalist)
      })
    // this.randomUserService
    //   .getUsers(
    //     this.pageIndex,
    //     this.pageSize,
    //     this.sortKey!,
    //     this.sortValue!,
    //     this.searchGenderList
    //   )
    //   .subscribe((data: any) => {
    //     console.log(data)
    //     this.loading = false
    //     this.total = 200
    //     this.listOfData = data.results
    //   })
  }
  // getFeedback(reset: boolean = false): void {
  //   if (reset) {
  //     this.pageIndex = 1
  //   }
  //   this.randomUserService
  //     .getFeedback(this.pageIndex, this.pageSize)
  //     .subscribe((data: any) => {
  //       console.log(data)
  //       this.listOfData = data.data.result
  //       this.total = data.data.total
  //     })
  //   // this.loading = true
  // }
  // getBill(reset: boolean = false): void {
  //   if (reset) {
  //     this.pageIndex = 1
  //   }
  //   this.randomUserService
  //     .getBill(this.pageIndex, this.pageSize)
  //     .subscribe((data: any) => {
  //       console.log(data)
  //     })
  // }
  // updateFilter(value: string[]): void {
  //   // this.searchGenderList = value
  //   this.searchData(true)
  // }

  ngOnInit(): void {
    this.searchData()
    // this.getFeedback()
    // this.getBill()
  }
}
