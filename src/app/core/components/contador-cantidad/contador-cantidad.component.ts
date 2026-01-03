import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  imports: [],
  templateUrl: './contador-cantidad.component.html',
  styleUrl: './contador-cantidad.component.scss',
  standalone: true
})
export class ContadorCantidadComponent {

  ngOnInit(): void{
    this.numero.set(this.cantidadInicial);
  }

  numero = signal(1);
  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() cantidadInicial = 1;

  actualizarNumero(diferencia: number){
    this.numero.set(Math.max(this.numero()+diferencia, 1));
    this.cantidadCambiada.emit(this.numero());
  }

}
