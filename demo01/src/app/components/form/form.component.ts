import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {

  public dataInfo:any={
    username:'',
    sex:'1',
    citylist:['北京','上海','广州'],
    city:'上海',
    hobby:[
      {
        title:'吃饭',
        checked:false
      },
      {
        title:'睡觉',
        checked:false
      },
      {
        title:'打豆豆',
        checked:true
      }
    ],
    remark:''
  }
  constructor() { }

  ngOnInit() {
  }
  ngSubmitClick(){
    console.log(this.dataInfo)
    let hobbyval = ''
    this.dataInfo.hobby.forEach(element => {
      if(element.checked){
        hobbyval+=element.title+','
      }
    });
    hobbyval=hobbyval.substring(0, hobbyval.length-1)
    console.log(hobbyval)
  }

}
