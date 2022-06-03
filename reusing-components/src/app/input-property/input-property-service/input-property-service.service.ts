import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputPropertyService {

  constructor() { }

  getName(): string{
    return 'Carlos Eduardo da Silva Oliveira'
  }

  gerCourse(): string{
    return 'Basic Angular'
  }
}
