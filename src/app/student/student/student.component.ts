import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

stud:Student=new Student(0,'',0,0);
std:Student=new Student(0,'',0,0);
// student:Student=new Student(0,'',0,0);
show:boolean=false;
students:Student[]=[
  new Student(1,'mohamed',20,1)
]


add(){
this.students.push(new Student(this.std.id,this.std.name,this.std.age,this.std.deptno));
this.std.id=0; this.std.name=''; this.std.age=0; this.std.deptno=0;
}

show_details(id:number){
  this.students.forEach(element => {
    if(element.id==id){
      this.stud=element;
      this.show=true;
     
    }
  });
}


delete(id:number){
  this.students.forEach(element => {
    if(element.id==id){
      this.students.pop();
      
     
    }
    
  });
}
update(id:number){
  this.students.forEach(element => {
    if(element.id==id){
      element.id=this.std.id;
      element.name=this.std.name;
      element.age=this.std.age;
      element.deptno=this.std.deptno;
     
    }
    
  });
  this.std.id=0;
  this.std.name='';
  this.std.age=0;
  this.std.deptno=0;
}



}
