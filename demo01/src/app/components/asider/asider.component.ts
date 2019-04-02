import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asider',
  templateUrl: './asider.component.html',
  styleUrls: ['./asider.component.styl']
})
export class AsiderComponent implements OnInit {

  public asiderShow:boolean=false
  constructor() { }

  ngOnInit() {
  }
  run(){
    console.log('我是 asider 里面的run方法')
  }
  ngAsiderClick(){
    this.asiderShow = !this.asiderShow
    console.log(this.asiderShow)
    this.showAsider()
  }
  showAsider(){
    if(this.asiderShow){
      let asiderDom:any = document.getElementsByClassName('asider')[0]
      asiderDom.style.transform = 'translate(0,0)'
    }else{
      let asiderDom:any = document.getElementsByClassName('asider')[0]
      asiderDom.style.transform = 'translate(-100%,0)'
    }
  }

}
