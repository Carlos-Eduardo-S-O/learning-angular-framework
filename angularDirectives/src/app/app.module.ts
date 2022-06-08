import { NgIfDirectiveService } from './ng-if-directive/services/ng-if-directive.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NgIfDirectiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
