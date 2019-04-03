import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { CommonService } from 'src/app/services/common.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.styl']
})
export class NewsComponent implements OnInit {

  public newsMsg:string='这是news的内容'
  
  constructor(public storage:StorageService, public common:CommonService) { }

  ngOnInit() {
  }
  ngClick(){
    this.storage.commonTitle = '01'
  }
}
