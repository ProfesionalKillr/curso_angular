import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
  Welcome {{counter}}
</p>
  <button (click)="incrementarValor(+1)">
  +1
</button>
<button (click)="reiniciar()">
  Reset
</button>
<button (click)="incrementarValor(-1)">
  -1
</button>


  `

})

export class CounterComponent {

  public counter: number =10;

  incrementarValor(value:number):void{
    this.counter += value;
  }
  reiniciar(){
    this.counter=10;
  }

}
