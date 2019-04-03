import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  @Input() homeMsg:string
  @Input() newsMsg:string

  public picUrl = 'https://www.baidu.com/img/bd_logo1.png'
  

  public headerlist:any[]=[
    {
      'title':'新闻'
    },
    {
      'title':'突发'
    },
    {
      'title':'娱乐'
    }
  ]

  public flag:boolean=true

  public orderStatus:number=1 // 1订单待支付，2订单已支付，3代发货，4已收货，5退款

  public today:any

  public keywords:string='this is the default value'

  constructor() { 
    console.log('aaa',this.today)
  }

  ngOnInit() {
  }
  ngFlagClick(){
    this.flag=!this.flag
    console.log('aaaaa')
  }
  ngCurrentTime(){
    this.today = new Date()
  }
  ngChangeKeyword(){
    this.keywords = String(new Date())
  }

}
