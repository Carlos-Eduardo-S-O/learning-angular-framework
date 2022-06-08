import { Component, Input,
  //  OnInit
  } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent
// implements OnInit
{
  @Input() courses: string[];

  constructor() {
    this.courses = []
   }

  // ngOnInit(): void {
  // }

}
