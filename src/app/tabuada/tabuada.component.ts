import { Component } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})

export class TabuadaComponent {
  numero: number;
  tabuada: any[];

  gerarTabuada() {
    this.tabuada = [];
    for (let i = 1; i <= 10; i++) {
      this.tabuada.push({
        operacao: `${this.numero} x ${i}`,
        resultado: this.numero * i
      });
    }
  }
}
