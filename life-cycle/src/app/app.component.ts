import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-cycle';
  value = 5;
  deleteCycle: boolean = false;

  changeValue = (): void => {
    this.value++;
  }

  destroy = (): void => {
    this.deleteCycle = !this.deleteCycle;
  }
}
