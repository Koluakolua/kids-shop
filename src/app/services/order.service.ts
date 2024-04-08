import { Injectable } from '@angular/core';
import {CatalogItem} from "../../assets/catalog-items";
import {OrderComponent} from "../cart/order/order.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface OrderItem {
  item: CatalogItem;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private static storageKey = 'kids-shop-order';
  private order: OrderItem[] = [];
  public order$: BehaviorSubject<OrderItem[]> = new BehaviorSubject<OrderItem[]>([]);

  constructor() {
    const order = localStorage.getItem(OrderService.storageKey);
    if (order) {
      this.order = JSON.parse(order);
      this.order$.next(this.order);
    }
  }

  public getOrder(): BehaviorSubject<OrderItem[]> {
    return this.order$;
  }

  public clearOrder() {
    this.order = [];
    localStorage.setItem(OrderService.storageKey, JSON.stringify(this.order));
    this.order$.next(this.order);
  }

  public addItem(item: CatalogItem, quantity?: number) {
    const foundItem = this.order.find(orderItem => orderItem.item.id === item.id);
    if (foundItem) {
      foundItem.quantity += quantity || 1;
    }
    else {
      this.order.push({
        item,
        quantity: quantity || 1
      });
    }
    localStorage.setItem(OrderService.storageKey, JSON.stringify(this.order));
    this.order$.next(this.order);
  }

  public removeItem(item: CatalogItem) {
    const foundItem = this.order.find(orderItem => orderItem.item.id === item.id);
    if (foundItem) {
      foundItem.quantity -= 1;
      if (foundItem.quantity === 0) {
        this.order = this.order.filter(orderItem => orderItem.item.id !== foundItem.item.id);
      }
    }
    localStorage.setItem(OrderService.storageKey, JSON.stringify(this.order));
    this.order$.next(this.order);
  }

  public getItemsTotalCount(): number {
    return this.order.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0)
  }

  public getItemsTotalPrice(): number {
    return this.order.reduce((acc, curr) => {
      return acc + curr.item.price * curr.quantity;
    }, 0)
  }
}
