import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'coffee',
  loadChildren: ()=> import('./coffee/coffee.module').then(m => m.CoffeeModule)
},
{
path:'',
redirectTo: 'coffee',
pathMatch: 'full'
},
{
  path:'**',
  redirectTo:'coffee'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
