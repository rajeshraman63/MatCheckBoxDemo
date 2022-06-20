import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBoxExpComponent } from './components/check-box-exp/check-box-exp.component';
import { CheckBoxExp2Component } from './components/check-box-exp2/check-box-exp2.component';
import { MatCheckBoxDemoComponent } from './components/mat-check-box-demo/mat-check-box-demo.component';
import { MaterialModule } from './material.module';
import { WeatherTestComponent } from './components/weather-test/weather-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxExpComponent,
    CheckBoxExp2Component,
    MatCheckBoxDemoComponent,
    WeatherTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],      // add the services name here
  bootstrap: [AppComponent]
})
export class AppModule { }
