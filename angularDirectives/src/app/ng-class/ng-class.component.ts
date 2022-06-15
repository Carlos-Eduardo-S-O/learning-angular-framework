import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  private starMode: boolean;

  constructor() { }

  ngOnInit(): void {
    this.starMode = true
  }

  switchStarShape(): void {
    this.starMode = !this.starMode;
  }

  getStarShape(): boolean {
    return this.starMode;
  }

}
