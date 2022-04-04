import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentContactComponent,
    StudentDetailComponent,
    StudentOverviewComponent,
    PageNotFoundComponent,
    TeacherDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }