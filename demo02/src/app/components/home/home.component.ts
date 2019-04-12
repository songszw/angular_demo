import { Component, OnInit } from '@angular/core';

import { ApisService } from '../../services/apis.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  public data:any=[]
  public domain:string=''

  constructor(public apis:ApisService) {
    this.domain = this.apis.domain
  }

  ngOnInit() {
    let api = 'api/productlist'
    
    this.apis.get(api).then((res:any)=>{
      this.data = res.result
      console.log(this.data)
    })
    
  }

}
