import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusing-components';

  onChangedCounter(value: any): void{
    console.log(value)
  }

  onChanged(): void{
    console.log('changed');
  }
}
