import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-exp',
  templateUrl: './check-box-exp.component.html',
  styleUrls: ['./check-box-exp.component.scss']
})
export class CheckBoxExpComponent implements OnInit {

  checkboxes: any[] = [
    { name: 'cb1', value: 'cb1', checked: false },
    { name: 'cb2', value: 'cb2', checked: false },  // checked : true
    { name: 'cb3', value: 'cb3', checked: false },
    { name: 'cb4', value: 'cb4', checked: false },
    { name: 'cb5', value: 'cb5', checked: false },
  ]



  constructor() { }

  ngOnInit() {
  }

  CheckAllOptions() {
    if (this.checkboxes.every(val => val.checked == true))
      this.checkboxes.forEach(val => { val.checked = false });
    else
      this.checkboxes.forEach(val => { val.checked = true });
  }

  showSelected(){
      this.checkboxes.forEach(val => {
        if(val.checked)
        console.log(val.name);
      }
      );
  }

}
