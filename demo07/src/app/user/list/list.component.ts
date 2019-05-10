import { Component, OnInit } from '@angular/core'
import { UserlistService } from '../../services/userlist.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  pageIndex = 1
  pageSize = 10
  total = 1
  listOfData = []
  loading = true
  sortValue: string | null = null
  sortKey: string | null = null
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ]
  searchGenderList: string[] = []

  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key
    this.sortValue = sort.value
    this.searchData()
  }

  constructor(private randomUserService: UserlistService) {}

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1
    }
    this.loading = true
    this.randomUserService
      .getUsers(
        this.pageIndex,
        this.pageSize,
        this.sortKey!,
        this.sortValue!,
        this.searchGenderList
      )
      .subscribe((data: any) => {
        this.loading = false
        this.total = 200
        this.listOfData = data.results
      })
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value
    this.searchData(true)
  }

  ngOnInit(): void {
    console.log('aaa')

    this.searchData()
  }
}
