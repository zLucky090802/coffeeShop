import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee-service.service';
import { CoffeeProduct } from '../../interfaces/coffee.inteface';
import { ModalService } from '../../services/modal-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalPagarComponent } from '../modal-pagar/modal-pagar.component';

@Component({
  selector: 'shopping-cart-coffee',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  private productos: CoffeeProduct[] = [];
  public coffeeFilter: CoffeeProduct[] = [];
  public subtotal: number = 0;
  public cantidad: number = 0
  public cantidadAnterior: number = 0;



  constructor(
    private coffeeService: CoffeeService,
    private ModalService: ModalService,
    public dialog: MatDialog
  ) {

    this.cargarProductos();
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  





  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalPagarComponent,);
  }

  cargarProductos() {



    this.productos = this.coffeeService.cargarCarrito();

    let existingProduct: CoffeeProduct[];



    for (var i = 0; i < this.productos.length; i++) {
      // Utilizar el método filter para buscar el producto en coffeeFilter
      existingProduct = this.coffeeFilter.filter(item => item.title === this.productos[i].title);




      if (existingProduct.length > 0) {
        // Si el producto ya existe en el carrito, sumar las cantidades

        existingProduct[0].cantidad! += this.productos[i].cantidad!;

        this.subtotal += this.productos[i].cantidad! * this.productos[i].price!;
        // this.subtotal += this.coffeeFilter[i].cantidad! * this.coffeeFilter[i].price!;


      } else {
        // Si el producto no existe en el carrito, agregarlo
        this.coffeeFilter.push(this.productos[i]);
        this.subtotal += this.productos[i].price! * this.productos[i].cantidad!;
        // this.subtotal += this.coffeeFilter[i].cantidad! * this.coffeeFilter[i].price!;

      }


    }

  }

  delete(i: number) {

    this.coffeeFilter.splice(i,1);

    this.coffeeService.borrarCarrito();
    localStorage.setItem('productos', JSON.stringify(this.coffeeFilter))
    if(this.coffeeFilter.length === 0){
      this.cantidadCarrito(0)

    }

  }

  aumentarCarrito(i: number) {



    //   this.coffeeFilter[i].cantidad! += 1;

    //   // this.cantidad += 1;

    //   if (this.cantidad <= 1) {
    //     this.cantidad +=1 ;
    // } else {
    //     this.cantidad += (this.cantidad - 1) - (this.cantidad - 2);
    // }
    //   this.subtotal += this.coffeeFilter[i].price!;
    //  this.cantidadCarrito(this.cantidad)
    //  this.coffeeService.borrarCarrito();
    //  this.agregarCarrito(this.coffeeFilter);
    this.coffeeFilter[i].cantidad! += 1;






    this.cantidad += 1;
    this.subtotal += this.coffeeFilter[i].price!;
    this.cantidadCarrito(1);
    this.coffeeService.borrarCarrito();
    this.agregarCarrito(this.coffeeFilter);



  }

  decrementarCarrito(i: number) {
    if (this.coffeeFilter[i].cantidad! > 1) {
      this.coffeeFilter[i].cantidad! -= 1;
      this.subtotal -= this.coffeeFilter[i].price!;

    }

  }

  cantidadCarrito(i: number) {
    this.ModalService.agregar(i)
  }

  reset() {
    this.cantidad = 0
    this.cantidadCarrito(this.cantidad)
    this.coffeeService.borrarCarrito();
  }

  agregarCarrito(coffee: CoffeeProduct[]) {


    localStorage.setItem('productos', JSON.stringify(coffee))
  }


}


