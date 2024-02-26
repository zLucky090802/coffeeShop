import { Component, Input, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee-service.service';
import { Subject } from 'rxjs';
import { ModalService } from '../../services/modal-service.service';
import { CoffeeProduct } from '../../interfaces/coffee.inteface';

@Component({
  selector: 'nav-bar-coffee',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cantidad: number = 0;
  coffeeFilter: CoffeeProduct[] = []
  constructor(private modalService: ModalService, private coffeeService: CoffeeService) { }
  ngOnInit(): void {
    this.cargarCarrito()

    this.modalService.showCantidad.subscribe(value => {

     if(value === 0){
      this.cantidad = 0;
     }else{
      this.cantidad += value
      console.log(this.cantidad)
     }

    }
    )

  }

  cargarCarrito() {
    this.coffeeService.cargarCarrito()
    this.cantidad += this.coffeeService.cantidad;
  }

  // getCantidad(){
  //   console.log(this.coffeeService.cantidad)
  //   return this.coffeeService.cantidad

  // }

}
