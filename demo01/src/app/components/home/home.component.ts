import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  public title:string = 'this is home page'

  public userInfo:object = {
    name:'张三',
    bill:'账单',
    payNum:'5000'
  }

  public lsit:any[]=['张三','李四','王五','赵六']

  public userlist:any[]=[
    {
      username:'张三',
      age:10
    },
    {
      username:'李四',
      age:20
    },
    {
      username:'王五',
      age:30
    }
  ]
  public carlist:any[]=[
    {
      username:'宝马',
      list:[
        {
          name:'x1',
          price:'30'
        },
        {
          name:'x2',
          price:'30'
        },
        {
          name:'x3',
          price:'30'
        }
      ]
    },
    {
      username:'奥迪',
      list:[
        {
          name:'q1',
          price:'30'
        },
        {
          name:'q2',
          price:'30'
        },
        {
          name:'q3',
          price:'30'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  handlePayClick(){
    this.userInfo['payNum']='0'
  }

}
