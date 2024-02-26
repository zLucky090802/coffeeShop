import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardComponent } from './components/card/card.component';
import { CoffeeService } from './services/coffee-service.service';
import { ModalPagarComponent } from './components/modal-pagar/modal-pagar.component';
import { ModalComponent } from './components/modal/modal.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';




@NgModule({
  declarations: [
    LayoutPageComponent,

    ListPageComponent,
    CardComponent,
    ModalPagarComponent,
    ModalComponent,

    NavBarComponent,
        ShoppingCartComponent,
        HomePageComponent,
        FooterComponentComponent
  ],
  imports: [
    CommonModule,
    CoffeeRoutingModule,


  ],

})
export class CoffeeModule { }
