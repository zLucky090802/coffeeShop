import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environment';
import { CoffeeProduct } from '../interfaces/coffee.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private baseUrl: string = environments.baseUrl
  cantidad: number  = 0;
  coffeeProduct: CoffeeProduct[] = [];


  constructor(private http: HttpClient) {
    
  }

  getProducts(): Observable<CoffeeProduct[]> {

    return this.http.get<CoffeeProduct[]>('https://api.sampleapis.com/coffee/hot')
  }




  agregarCarrito(coffee?: CoffeeProduct ) {



      this.coffeeProduct.push(coffee!)
      localStorage.setItem('productos', JSON.stringify(this.coffeeProduct))

    localStorage.setItem('productos', JSON.stringify(this.coffeeProduct))
  }

  cargarCarrito():CoffeeProduct[]{

    if(localStorage.getItem('productos')){

      this.coffeeProduct = JSON.parse(localStorage.getItem('productos')!);
       for (const coffee of this.coffeeProduct) {
        this.cantidad = coffee.cantidad!;



       }

    }
   return this.coffeeProduct
  }

  borrarCarrito(){
    this.coffeeProduct = [];
    localStorage.removeItem('productos');
  }
}
