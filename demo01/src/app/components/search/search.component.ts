import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  public searchVal:string=''
  public historyList:any[]=[]
  constructor(public storage:StorageService) { }
  ngOnInit() {
    if(this.storage.get('searchlist')){
      this.historyList = this.storage.get('searchlist')
    }
  }
  ngSearchClick(){
    if(this.searchVal){
      if(this.historyList.indexOf(this.searchVal)==-1){
        this.historyList.push(this.searchVal)
      }
      this.searchVal=''
      this.storage.set('searchlist',this.historyList)
    }
  }
  ngDeleteClick(key){
    this.historyList.splice(key,1)
    this.storage.set('searchlist',this.historyList)
  }
  ngSearchAgain(item){
    this.searchVal = item
  }
  keyup(event){
    if(event.keyCode == 13){
      this.ngSearchClick()
    }
  }


}
