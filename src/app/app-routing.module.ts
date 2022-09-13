import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path:' ', redirectTo:'inicio',pathMatch:'full'},
  {  path:'inicio', component:HeaderComponent},
  {  path:'car', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
