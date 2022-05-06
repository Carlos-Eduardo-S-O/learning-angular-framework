import { CourseComponent } from './course.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    CourseComponent,
    CourseDetailsComponent
  ],
  exports:[
    CourseComponent
  ],
})
export class CourseModule{}
