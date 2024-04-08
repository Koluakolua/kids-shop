import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CartDialogComponent} from "../cart/cart-dialog/cart-dialog.component";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, public orderService: OrderService) { }

  ngOnInit(): void {
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }

  onCartClick() {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '100%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.animal = result;
    });
  }

}
