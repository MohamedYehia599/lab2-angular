import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  d:Department=new Department(0,'','');
  dept:Department=new Department(0,'','');
  show:boolean=false;
  depts:Department [] = [
    
    new Department(1,'os','alex'),

  ];
  department:Department=new Department(0,'','');
  add(){
    this.depts.push(new Department(this.dept.id,this.dept.depName,this.dept.loc));
    this.dept.id=0; this.dept.depName=''; this.dept.loc='';
  }
  show_details(id:number){
    
    this.depts.forEach(element => {
      if(element.id==id){
        this.d=element;
        this.show=true;
       
      }
      
    });
  }

  delete(id:number){
    this.depts.forEach(element => {
      if(element.id==id){
        this.depts.pop();
        
       
      }
      
    });
  }

  update(id:number){
    this.depts.forEach(element => {
      if(element.id==id){
        element.id=this.dept.id;
        element.depName=this.dept.depName;
        element.loc=this.dept.loc;
       
      }
      
    });
    this.dept.id=0;
    this.dept.depName='';
    this.dept.loc='';
  }

}
