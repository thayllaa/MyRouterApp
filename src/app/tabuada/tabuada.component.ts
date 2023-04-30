import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],

})
export class TabuadaComponent implements OnInit {
  n: number;

  constructor() {}

  ngOnInit() {}

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }

  multiplicar() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(this.n * i);
    }
    return arr;
  }
}