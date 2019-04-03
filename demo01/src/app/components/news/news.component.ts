import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.styl']
})
export class NewsComponent implements OnInit {

  public newsMsg:string='这是news的内容'
  constructor() { }

  ngOnInit() {
  }

}
