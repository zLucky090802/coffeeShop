import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal-service.service';
import { CoffeeProduct } from '../../interfaces/coffee.inteface';
import { CoffeeService } from '../../services/coffee-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'modal-coffee',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  implements OnInit{
  coffeProduct!: CoffeeProduct;
  isOpen: boolean = false;
  data: any;
  price: number = 2;

  cantidad: number = 1;




  constructor(
    private modalService: ModalService,
    private coffeeService: CoffeeService
    ){

  }

  ngOnInit(): void {
    this.modalService.showModal$.subscribe(
      data =>{
        if(data){
          this.coffeProduct = data
          this.isOpen = true;
        }
      }
    )

  }

  agregar(){
    this.cantidad += 1;



  }

  agregarCarrito(){

    this.modalService.agregar(this.cantidad);

    this.coffeProduct.cantidad = this.cantidad;
    this.coffeProduct.price = this.price;
    this.coffeeService.agregarCarrito(this.coffeProduct);
    this.closeModal()
    


  }

  disminuir(){

    if(this.cantidad > 0 ){
      this.cantidad-= 1;
    }
  }


  closeModal() {
    this.modalService.closeModal();
    this.isOpen = false;
    this.cantidad = 1
  }

}
