import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})

export class TabuadaComponent implements OnInit {
  number: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.number = Number(params.get('number'));
    });
  }

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.number; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }

  multiplicar() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(this.number * i);
    }
    return arr;
  }
}