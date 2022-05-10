import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getUrlImage(): string{
    return this.imageUrl;
  }

  getUrl(): string{
    return this.url;
  }
}
