import {Component, Input, OnInit} from '@angular/core';
import {CatalogItem} from "../../../assets/catalog-items";
import {OrderService} from "../../services/order.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input()
  catalogItem!: CatalogItem;

  constructor(
    private orderService: OrderService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.orderService.addItem(this.catalogItem);
  }

  onCartClick(event: any) {
    this.orderService.addItem(this.catalogItem);
    event.stopPropagation();
    this.snackBar.open('Товар додано у кошик', '', {
      duration: 2000
    });
  }
}
