import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: [
    './data-bind.component.scss',
  ]
})
export class DataBindComponent implements OnInit {
  private url: string = 'http://loiane.com';
  private imageUrl: string = 'http://lorempixel.com.br/500/400/?1';
  name:any = ''

  constructor(
  ) { }

  ngOnInit(): void {
    console.log("started")
  }

  setName(event: any): void{
    this.name = event.value;
  }

  getUrlImage(): string{
    return this.imageUrl;
  }

  getUrl(): string{
    return this.url;
  }
}
