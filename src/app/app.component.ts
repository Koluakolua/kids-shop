import { Component } from '@angular/core';
import {CatalogItem, catalogItems} from "../assets/catalog-items";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catalogItems: CatalogItem[] = catalogItems;


}
