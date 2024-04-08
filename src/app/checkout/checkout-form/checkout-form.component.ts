import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {TelegramBotService} from "../../services/telegram-bot.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderItem, OrderService} from "../../services/order.service";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  mockNpUnits = [
    {
      number: 123,
      address: "Ilfa ta Petrova"
    },
    {
      number: 153,
      address: "Ilfa ta Petrova"
    },
  ];

  mockCities = [
    "Одеса", "Київ"
  ];

  formGroup = new FormGroup({
    phone: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    npUnit: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    comment: new FormControl(null),
  })

  constructor(
    private fb: FormBuilder,
    private botService: TelegramBotService,
    private snackBar: MatSnackBar,
    public orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  onCheckout() {

    const order = {
      ...this.formGroup.value,
      ...this.orderService.order$.value
    };
    this.botService.sendMessage(JSON.stringify(order)).subscribe({
      next: () => {
          this.snackBar.open('Заказ було прийнято в обробку', '', {
            duration: 2000
          });
          this.orderService.clearOrder();
      },
      error: () => {
        this.snackBar.open('Сталася якась помилка, будь ласка, наберіть контактний номер', '', {
          duration: 5000
        });
      }
    });

  }
}
