import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService} from '../../services/storage.service'
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  
  @ViewChild('header') header:any
  @ViewChild('mybox') mybox:any
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
  constructor(public storage:StorageService, public common:CommonService ) { }
  ngAfterViewInit(){
    // console.log('父组件获取子组件',this.header)
    // console.log(this.header.nativeElement)
    let box:any = document.getElementsByClassName('wahaha')[0]
    console.log('box',box.innerHTML)
    // console.log('aaabbb',this.mybox.nativeElement)
  }
  ngGetHeader(){
    this.header.run()
  }

  ngOnInit() {
  }
  handlePayClick(){
    this.userInfo['payNum']='0'
  }
  handleStorageClick(){
    console.log('aaaaaa')
    console.log(
      this.storage.commonTitle='102'
    )
  }
  ngHomeRun(){
    console.log('this is home run')
  }

}
