import { TwoWayDataBindingServiceService } from './two-way-data-binding/two-way-data-binding-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TwoWayDataBindingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
