import { CourseService } from './service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  private url: string;
  private courses: string[];

  constructor(
    private courseService: CourseService,

  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.url = this.courseService.getUrl();
  }

  getUrl(): string{
    return this.url;
  }

  getCourses(): string[]{
    return this.courses;
  }

}
