import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-student-list',
  template: `
    
    <h3>

    Student List

</h3>

<ul class="items">

    <li (click)="onSelect(student)" *ngFor="let student of students">

<span class = "badge">{{student.id}}</span> {{student.name}}

{{student.name}}

    </li>

</ul>
  `,
  styles: [
  ]
})
export class StudentListComponent implements OnInit {
  students = [

    {"id": 1,"name":"Yaswini"},
  
    {"id": 2,"name":"Sindhug"},
  
    {"id": 3,"name":"Archana"},
  
    {"id": 4,"name":"Harikaa"},
  
    {"id": 5,"name":"Satvikaa"}
  
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 onSelect(student: any){
 this.router.navigate(['/students',student.id]);
}
}

