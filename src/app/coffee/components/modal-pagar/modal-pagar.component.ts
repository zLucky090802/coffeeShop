import { Component, Input, OnInit } from '@angular/core';
import { CoffeeProduct } from '../../interfaces/coffee.inteface';

@Component({
  selector: 'modal-pagar-coffee',
  templateUrl: './modal-pagar.component.html',
  styleUrls: ['./modal-pagar.component.css']
})
export class ModalPagarComponent {

  @Input()
  public coffeeProduct!: CoffeeProduct;




}
