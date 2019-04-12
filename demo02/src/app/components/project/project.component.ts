import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApisService } from '../../services/apis.service'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent implements OnInit {

  public domain:string=''
  public list:any={}

  constructor(public route:ActivatedRoute, public apis:ApisService) { 
    this.domain=this.apis.domain
  }

  ngOnInit() {
    this.route.params.subscribe((value)=>{
      this.getData(value.id)

    })
    

  }
  getData(id){
    let itemUrl = 'api/productcontent?id='+id
    this.apis.get(itemUrl).then((res:any)=>{
      this.list = res.result[0]
      console.log(this.list)
    })
  }

}
