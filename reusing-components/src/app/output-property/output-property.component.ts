import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  outputs: ['changed']
})
export class OutputPropertyComponent implements OnInit {

  @Input() counter: number = 0;
  @Output() valueHasChanged = new EventEmitter;

  @ViewChild('inpValue') inputField: ElementRef;

  changed= new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  getCounter(): number{
    return this.counter;
  }

  incrementCounter(): void{
    //this.counter--;
    this.inputField.nativeElement.value++;
    this.valueHasChanged.emit({newValue: this.counter});
    this.changed.emit()
  }

  decrementCounter(): void{
    this.counter--;
    this.inputField.nativeElement.value--;
    this.valueHasChanged.emit({newValue: this.counter})
    this.changed.emit()
  }
}
