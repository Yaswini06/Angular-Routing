import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { StudentContactComponent } from './student-contact/student-contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { 
    path: 'students/:id', 
    component: StudentDetailComponent,
    children: [
      { path: 'overview', component: StudentOverviewComponent},
      { path: 'contact', component: StudentContactComponent}
    ]
   },
  { path: 'teachers',   component: TeacherListComponent },
  { path: 'detail',   component: TeacherDetailComponent },
  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentListComponent,
                                  StudentDetailComponent, 
                                  TeacherListComponent,
                                  TeacherDetailComponent,
                                  PageNotFoundComponent,
                                  StudentOverviewComponent,
                                  StudentContactComponent]