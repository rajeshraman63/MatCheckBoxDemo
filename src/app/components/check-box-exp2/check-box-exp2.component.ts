import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-exp2',
  templateUrl: './check-box-exp2.component.html',
  styleUrls: ['./check-box-exp2.component.scss']
})
export class CheckBoxExp2Component implements OnInit {


  constructor() { }

  

  ngOnInit() {





  }

  isTrade: boolean = false
  isNonTrade: boolean = false
  checkAllNonTrades: boolean = false
  checkAllTrades: boolean = false

  nontrade = [
    { label: 'a', selected: false },
    { label: 'b', selected: false },
    { label: 'c', selected: false },
    { label: 'd', selected: false }
  ];

  trade = [
    { label: 'aa', selected: false },
    { label: 'bb', selected: false },
    { label: 'cc', selected: false },
    { label: 'dd', selected: false }
  ];

  changeTradesByCategory(event) {

    console.log("Event " + event);
    console.log("Event.target " +  event.target);

    if (event.target.name == 'trades') {
      this.isTrade = true
    }

    if (event.target.name == 'nontrades') {
      this.isNonTrade = true
    }

    if (this.isNonTrade && this.checkAllNonTrades) {
      event.target.checked = true
    }

    if (this.isTrade && this.checkAllTrades) {
      event.target.checked = true
    }
  }

  allNonTrades(event) {
    const checked = event.target.checked;
    this.nontrade.forEach(item => item.selected = checked);
  }

  allTrades(event) {
    const checked = event.target.checked;
    this.trade.forEach(item => item.selected = checked);
  }

  showSelectedTrade(){
    this.trade.forEach(item => {
      if(item.selected)
        console.log(item.label);
    })
  }

  showSelectedNonTrade(){
    this.nontrade.forEach(item => {
      if(item.selected)
        console.log(item.label);
    })
  }

}
