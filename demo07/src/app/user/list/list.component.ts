import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  isAllDisplayDataChecked = false
  isOperating = false
  isIndeterminate = false
  listOfDisplayData: any = []

  listOfAllData: any = [
    {
      id: '1',
      name: 'Johon Brown',
      age: 32,
      address: 'New Yourk No. 1 Lake Park'
    },
    {
      id: '2',
      name: 'Steve Jobs',
      age: 40,
      address: 'United States'
    },
    {
      id: '3',
      name: 'Harry Potter',
      age: 28,
      address: 'United Kingdom'
    },

    {
      id: '1',
      name: 'Johon Brown',
      age: 32,
      address: 'New Yourk No. 1 Lake Park'
    },
    {
      id: '2',
      name: 'Steve Jobs',
      age: 40,
      address: 'United States'
    },
    {
      id: '3',
      name: 'Harry Potter',
      age: 28,
      address: 'United Kingdom'
    },

    {
      id: '1',
      name: 'Johon Brown',
      age: 32,
      address: 'New Yourk No. 1 Lake Park'
    },
    {
      id: '2',
      name: 'Steve Jobs',
      age: 40,
      address: 'United States'
    },
    {
      id: '3',
      name: 'Harry Potter',
      age: 28,
      address: 'United Kingdom'
    },

    {
      id: '1',
      name: 'Johon Brown',
      age: 32,
      address: 'New Yourk No. 1 Lake Park'
    },
    {
      id: '2',
      name: 'Steve Jobs',
      age: 40,
      address: 'United States'
    },
    {
      id: '3',
      name: 'Harry Potter',
      age: 28,
      address: 'United Kingdom'
    }
  ]
  mapOfCheckedId: { [key: string]: boolean } = {}
  numberOfChecked = 0

  currentPageDataChange($event: any): void {
    this.listOfDisplayData = $event
    this.refreshStatus()
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id])
    this.isIndeterminate =
      this.listOfDisplayData
        .filter(item => !item.disabled)
        .some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked
    this.numberOfChecked = this.listOfAllData.filter(
      item => this.mapOfCheckedId[item.id]
    ).length
  }
  checkAll(value: boolean): void {
    this.listOfDisplayData
      .filter(item => !item.disabled)
      .forEach(item => (this.mapOfCheckedId[item.id] = value))
    this.refreshStatus()
  }

  operateData(): void {
    this.isOperating = true
    setTimeout(() => {
      this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = false))
      this.refreshStatus()
      this.isOperating = false
    }, 1000)
  }
  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //   this.listOfAllData.push({
    //     id: i,
    //     name: `Edward King ${i}`,
    //     age: 32,
    //     address: `London, Park Lane no. ${i}`
    //   })
    // }
  }
}
