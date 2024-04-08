import { Component, OnInit } from '@angular/core';
import {OrderItem, OrderService} from "../../services/order.service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

interface TableItem {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderItems!: BehaviorSubject<OrderItem[]>;
  tableData!: Observable<TableItem[]>;
  displayedColumns: string[] = ['name', 'quantity', 'price'];

  constructor(public orderService: OrderService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderItems = this.orderService.getOrder();
    this.tableData = this.orderItems.pipe(
      map((items => items.map(item => {
        return {
          id: item.item.id,
          name: item.item.title,
          quantity: item.quantity,
          price: item.quantity * item.item.price
        }
      })))
    )
  }

  onArrowClick(direction: "left" | "right", id: string) {
    const orderItem = this.orderItems.value.find(item => item.item.id === id);
    if (direction === "left") {
      this.orderService.removeItem(orderItem!.item);
    }
    else {
      this.orderService.addItem(orderItem!.item);
    }
    if (this.orderService.getItemsTotalCount() === 0) {
      this.dialog.closeAll();
    }
  }

}
