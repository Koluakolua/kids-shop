import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

class DialogData {
}

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    public router: Router,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {

  }

  onCheckoutClick() {
    this.dialog.closeAll();
    this.router.navigate(['/checkout']);
  }
}
