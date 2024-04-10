import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogItem, catalogItems} from "../../assets/catalog-items";
import {OrderService} from "../services/order.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Image} from "@ks89/angular-modal-gallery";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!: CatalogItem;
  images: Image[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public orderService: OrderService, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) {
        this.router.navigate(['/']);
      } else {
        this.product = catalogItems.find(item => item.id === id)!;
      }
    });
  }

  onCartClick() {
    this.orderService.addItem(this.product);
    this.snackBar.open('Товар додано у кошик', '', {
      duration: 2000
    });
  }

}
