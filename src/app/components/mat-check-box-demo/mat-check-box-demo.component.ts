import { Component, OnInit } from '@angular/core';
import { DummyTableData } from './DummyTableData';
import { MatCheckbox } from '@angular/material';

@Component({
  selector: 'app-mat-check-box-demo',
  templateUrl: './mat-check-box-demo.component.html',
  styleUrls: ['./mat-check-box-demo.component.scss']
})
export class MatCheckBoxDemoComponent implements OnInit {

  filteredData: DummyTableData[] = [
    { "host": "host1", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host2", "pointsTo": "198.168.15.102", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Feb 2021" },
    { "host": "host3", "pointsTo": "198.168.15.106", "ttl": 3600, "startEndDate": "26 Jan 2020 to 15 Jan 2021" },
    { "host": "host4", "pointsTo": "198.168.15.105", "ttl": 3600, "startEndDate": "10 Feb 2020 to 15 Jan 2021" },
    { "host": "host5", "pointsTo": "198.168.10.44", "ttl": 3600, "startEndDate": "16 March 2020 to 25 Jan 2021" },
    { "host": "host6", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host7", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host8", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host9", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "host", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "demo", "pointsTo": "20.20.20.0", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Jan 2021" },
    { "host": "demo2", "pointsTo": "198.168.15.102", "ttl": 3600, "startEndDate": "16 Jan 2020 to 15 Feb 2021" },
    { "host": "demohost3", "pointsTo": "198.168.15.106", "ttl": 3600, "startEndDate": "26 Jan 2020 to 15 Jan 2021" },
    { "host": "demohost4", "pointsTo": "198.168.15.105", "ttl": 3600, "startEndDate": "10 Feb 2020 to 15 Jan 2021" }
  ]

  singleCheckArray: boolean[] = [];
  allCheckFlag: boolean;

  // rowDataToBeDelete:DummyTableData[] = [];
  selection: DummyTableData[] = [];

  constructor() { }

  ngOnInit() {
    let len = this.filteredData.length;
    // this.singleCheckArray = new Array(len);
    this.singleCheckArray.length = len;

    this.allCheckFlag = false;
    this.singleCheckArray.fill(false);

    console.log("bool array size : " + this.singleCheckArray.length);
  }


  AllCheckBoxClickHandler(event: MatCheckbox) {
    console.log(event);
    this.allCheckFlag = event.checked;

    this.selection = [];

    if (this.allCheckFlag) {
      this.filteredData.forEach(fd => this.selection.push(fd));
      this.singleCheckArray.fill(true);
    } else {
      // this.selection = [];
      this.singleCheckArray.fill(false);
    }

  }

  toggleSelection(event: MatCheckbox, selecteRowData: DummyTableData, index: number) {
    // console.log(event.checked);

    /* if(this.allCheckFlag)
      this.allCheckFlag = false; */

    this.singleCheckArray[index] = event.checked;

    // add to the selection 
    if (event.checked) {
      this.selection.push(selecteRowData);
    } else {  // remove from the selection
      let idx = this.selection.indexOf(selecteRowData);
      if(idx > -1)
        this.selection.splice(idx, 1);
    }

    if(this.filteredData.length == this.selection.length)
      this.allCheckFlag = true;
    else 
      this.allCheckFlag = false;

    // console.log(this.singleCheckArray[index]);
  }

  showSelected() {
    console.log("Count of Selection : " + this.selection.length);
    this.selection.forEach(d => {
      console.log(d);
    })
    console.log("Count of Selection : " + this.selection.length);
  }

}
