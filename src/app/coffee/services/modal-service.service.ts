import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CoffeeProduct } from '../interfaces/coffee.inteface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModalSource = new Subject<any>();
  public showModal$ = this.showModalSource.asObservable();
  coffeeProduct: CoffeeProduct[] = [];
  private cantidad = new Subject<any>();
  public showCantidad = this.cantidad.asObservable()
  constructor() { }


  openModal(coffeeProduct:CoffeeProduct|CoffeeProduct[]){
   this.showModalSource.next(coffeeProduct)


  }

  closeModal(){
    this.showModalSource.next(null)
  }

  LoadProducts(){
    if(localStorage.getItem('productos')){
      this.coffeeProduct = JSON.parse(localStorage.getItem('productos')!);
       for (const coffee of this.coffeeProduct) {
        this.cantidad.next(coffee.cantidad);
       }
    }
    else return;


  }

  agregar(cantidad: number){
    this.cantidad.next(cantidad)
  }
}
