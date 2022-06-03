import { TwoWayDataBindingServiceService } from './../two-way-data-binding-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {
  name: string = 'abc';

  person: any = {
    name: '',
    lastName: '',
    age: undefined
  }

  constructor(private n: TwoWayDataBindingServiceService) {
    this.name = n.getName();
  }

  ngOnInit(): void {
  }

  setName(input: any): void{
    // if(input.value !== undefined){
    //   this.name = input.value;
    // }else{
    //   this.name = input;
    // }

    input.value ? this.name = input.value : this.name = input;
  }

  getName(): string{
    return this.name;
  }

}
