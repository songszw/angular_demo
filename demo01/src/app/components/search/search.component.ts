import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  public searchVal:string=''
  public historyList:any[]=[]
  constructor() { }
  ngOnInit() {
  }
  ngSearchClick(){
    if(this.searchVal){
      if(this.historyList.indexOf(this.searchVal)==-1){
        this.historyList.push(this.searchVal)
      }
      this.searchVal=''
    }
  }
  ngDeleteClick(key){
    this.historyList.splice(key,1)
  }
  ngSearchAgain(item){
    this.searchVal = item
  }


}
