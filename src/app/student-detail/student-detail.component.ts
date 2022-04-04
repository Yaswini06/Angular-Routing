import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-detail',
  template: `
    
    <h3> you selected student with id = {{studentId}}</h3>
  `,
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {
 public studentId:any;
 
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
 this.studentId = id;
  }

}
