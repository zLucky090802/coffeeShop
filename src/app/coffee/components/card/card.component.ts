import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CoffeeProduct } from '../../interfaces/coffee.inteface';
import { ModalService,  } from '../../services/modal-service.service';

@Component({
  selector: 'card-coffee',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public coffeeProduct!: CoffeeProduct;

  public valor = 2

  constructor(private modalService:ModalService){

  }

  ngOnInit(): void {
    if(!this.coffeeProduct) throw new Error('No se han podido cargar los productos');

  }

  open(coffeeProduct: CoffeeProduct){
    this.modalService.openModal(coffeeProduct)
  }
}
