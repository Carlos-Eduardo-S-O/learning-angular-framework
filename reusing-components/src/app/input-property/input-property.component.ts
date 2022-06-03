import { InputPropertyService } from './input-property-service/input-property-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  inputs: ['teacherName:teacher']
})
export class InputPropertyComponent implements OnInit {
  name: string = '';
  course: string = '';
  teacherName: string ='';

  @Input('hours') courseHours: number = 0

  constructor(private server: InputPropertyService) {
    this.name = server.getName(),
    this.course = server.gerCourse()
  }

  ngOnInit(): void {
  }
  getTeacherName(): string{
    return this.teacherName;
  }

  getName(): string{
    return this.name;
  }

  getCourse(): string{
    return this.course;
  }

  getHours(): number{
    return this.courseHours;
  }
}
