import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgIfDirectiveService {
  private courses: string[];

  constructor() {
    this.courses = ["Angular", "Java", "TypeScript", "PHP"]
  }

  getCourses(): string[]{
    return this.courses;
  }
}
