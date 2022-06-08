import { NgIfDirectiveService } from './services/ng-if-directive.service';
import {
  Component,
  //OnInit
 } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.scss']
})
export class NgIfDirectiveComponent
//implements OnInit
{
  private courses: string[];

  constructor(private ngIfService: NgIfDirectiveService) {
    this.courses = ngIfService.getCourses();
    //this.courses = []
  }

  // ngOnInit(): void {
  // }
  isTheCourseListEmpty(): boolean{
    return this.courses.length > 0 ? true: false
  }

  getCourses(): string[] {
    return this.courses;
  }
}
