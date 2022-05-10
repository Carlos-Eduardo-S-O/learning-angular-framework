import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  private inputValue: string = '';
  private inputStringValue: any = '';
  private isTheMouseOver: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  clickedButton(): void{
    alert("The button was clicked!!!");
  }

  onKeyUp(event: KeyboardEvent): void{
    console.log(event.key);
    this.inputValue = ((<HTMLInputElement>event.target).value);
  }

  saveValue(value: any): void {
    this.inputStringValue = value.value;
  }

  mouseOver(): void{
    this.isTheMouseOver = !this.isTheMouseOver;
  }

  mouseOut(): void{
    this.isTheMouseOver = !this.isTheMouseOver;
  }

  getInputValue(): string{
    return this.inputValue;
  }

  getIsTheMouseOver(): boolean{
    return this.isTheMouseOver;
  }

  getInputStringValue(): any{
    return this.inputStringValue;
  }
}
