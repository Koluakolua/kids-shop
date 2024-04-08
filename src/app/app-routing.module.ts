import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  { path: '', component: CatalogComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: ':id', component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
