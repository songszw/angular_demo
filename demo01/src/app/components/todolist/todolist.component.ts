import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.styl']
})
export class TodolistComponent implements OnInit {

  public todoVal:string=''

  public todoList:any[]=[]

  public maskstatus:boolean=false

  constructor(public storage:StorageService) { 
  }

  ngOnInit() {
    if(this.storage.get('todolist')){
      this.todoList = this.storage.get('todolist')
    }
  }
  ngKeyUp(e){
    if(e.keyCode == 13){
      if(this.todoVal){
        if(this.ngCheck(this.todoList,this.todoVal)){
          this.todoList.push({
            title:this.todoVal,
            status:false
          })
          this.todoVal=''
          this.storage.set('todolist',this.todoList)
        }
      }
    }
  }
  nginputchange(){
    this.storage.set('todolist',this.todoList)
  }
  ngChangeClick(index){
    this.todoList[index].status=!this.todoList[index].status
    this.storage.set('todolist',this.todoList)
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
    this.storage.remove('todolist')
  }
  closeMask(){
    this.maskstatus = false
  }
  ngDelete(index){
    this.todoList.splice(index,1)
    this.storage.set('todolist',this.todoList)
  }
}
