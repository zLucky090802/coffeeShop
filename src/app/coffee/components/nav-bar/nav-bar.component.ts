import { Component, Input, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee-service.service';
import { Subject } from 'rxjs';
import { ModalService } from '../../services/modal-service.service';
import { CoffeeProduct } from '../../interfaces/coffee.inteface';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar-coffee',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cantidad: number = 0;
  coffeeFilter: CoffeeProduct[] = []
  active: boolean = false;
  constructor(private modalService: ModalService, private coffeeService: CoffeeService,private authService:AuthService, private route: Router) { }
  ngOnInit(): void {

    this.cargarCarrito()

    this.modalService.showCantidad.subscribe(value => {
     if(!localStorage.getItem('productos')){
      this.cantidad = 0;
     }
     if(value === 0){
      this.cantidad = 0;
     }else{
      this.cantidad += value
      console.log(this.cantidad)
     }

    }
    )

  }




  get user():User | undefined{
   return this.authService.getUser();
   console.log(this.authService.getUser())
  }

  logOut(){
    this.authService.logOut();
    this.route.navigate(['list'])
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
