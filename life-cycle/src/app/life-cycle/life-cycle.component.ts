import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  constructor() { this.log("constructor") }

  @Input() value = 10;

  ngOnInit(): void { this.log("ngOnInit") }

  ngOnChanges(): void { this.log("ngOnChanges") }

  ngDoCheck(): void { this.log("ngDoCheck") }

  ngAfterContentInit(): void { this.log("ngAfterContentInit") }

  ngAfterContentChecked(): void { this.log("ngAfterContentChecked") }

  ngAfterViewInit(): void { this.log("ngAfterViewInit") }

  ngAfterViewChecked(): void { this.log("ngAfterViewChecked")}

  ngOnDestroy(): void { this.log("ngOnDestroy") }

  private log(hook: string) {
      console.log(hook)
  }
}
