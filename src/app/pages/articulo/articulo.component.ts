import { Component, OnInit, inject, signal } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/interfaces/productos';
import { CommonModule } from '@angular/common';
import { ContadorCantidadComponent } from "../../core/components/contador-cantidad/contador-cantidad.component";
import { CartService } from '../../core/services/cart.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-articulo',
  imports: [CommonModule, RouterModule, ContadorCantidadComponent, FormsModule],  
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  private headerService = inject(HeaderService);
  private productosService = inject(ProductosService);
  private cartService = inject(CartService);
  private ac = inject(ActivatedRoute);
  private router = inject(Router);


  producto?: Producto;
  cantidad = signal(1);
  notas = "";     

  ngOnInit(): void {
    this.headerService.titulo.set("Articulo");
    this.ac.params.subscribe(param => {
      const id = Number(param['id']);
      if (id) {
        this.productosService.getById(id).then(producto => {
          this.producto = producto;
          if (this.producto) {
            this.headerService.titulo.set(this.producto.nombre);
          }
        });
      }
    });        
  }

  // constructor(private ac:ActivatedRoute, private router: Router) {
    
  // }  
  agregarAlCarrito(){
    if(!this.producto) return;
    this.cartService.agregarProducto(this.producto?.id, this.cantidad(), this.notas);
    this.router.navigate(["/carrito"]);
  }
  
}
