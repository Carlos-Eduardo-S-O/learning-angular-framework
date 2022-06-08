import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDirectives';
  private currentSelectedTab: string = "home";

  setCurrentSelectedTab(tabName: string): void{
    this.currentSelectedTab = tabName;
  }

  areTheTabsNamesEqual(tabNameToBeCompared:string, currentTabName: string): boolean{
    return tabNameToBeCompared === currentTabName;
  }

  getCurrentSelectedTab(): string{
    return this.currentSelectedTab;
  }
}
