import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.styl']
})
export class TodolistComponent implements OnInit {

  public todoVal:string=''

  public todoList:any[]=[]

  public maskstatus:boolean=false

  constructor() { }

  ngOnInit() {
  }
  ngKeyUp(e){
    if(e.keyCode == 13){
      if(this.todoVal){
        if(this.ngCheck(this.todoList,this.todoVal)){
          this.todoList.push({
            title:this.todoVal,
            status:0
          })
          this.todoVal=''
        }
      }
    }
  }
  ngChangeClick(index){
    this.todoList[index].status=!this.todoList[index].status
  }
  ngCheck(list,item){
    for(let i=0; i<list.length; i++){
      if(list[i].title == item){
        this.maskstatus = true
        return false
      }
    }
    return true
  }
  ngDeleteAll(){
    this.todoList = []
  }
  closeMask(){
    this.maskstatus = false
  }
  ngDelete(index){
    this.todoList.splice(index,1)
  }
}
