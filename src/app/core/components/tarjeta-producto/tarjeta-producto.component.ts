import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/productos';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [CommonModule],
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent {

  @Input({required: true}) producto!: Producto;

}
