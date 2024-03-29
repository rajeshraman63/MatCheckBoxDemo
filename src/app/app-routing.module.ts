import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckBoxExpComponent } from './components/check-box-exp/check-box-exp.component';
import { CheckBoxExp2Component } from './components/check-box-exp2/check-box-exp2.component';
import { MatCheckBoxDemoComponent } from './components/mat-check-box-demo/mat-check-box-demo.component';
import { WeatherTestComponent } from './components/weather-test/weather-test.component';


const routes: Routes = [

  {
    path: "checkboxexp1",
    component: CheckBoxExpComponent
  },
  {
    path: "checkboxexp2",
    component: CheckBoxExp2Component
  },
  {
    path: "matcheckbox",
    component: MatCheckBoxDemoComponent
  },
  {
    path: "",
    component: WeatherTestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
