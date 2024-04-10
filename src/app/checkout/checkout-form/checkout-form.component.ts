import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {TelegramBotService} from "../../services/telegram-bot.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderService} from "../../services/order.service";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {switchMap, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
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
    public orderService: OrderService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCheckout() {
    const form = this.formGroup.value;
    const formText =
`*ПІБ*:${form.name}\n
*Телефон*:${form.phone}\n
*Місто*:${form.city}\n
*Відділення*:${form.npUnit}\n
*Коментар*:${form.comment}\n\n`;

    const order = this.orderService.order$.value;
    let orderText = '*Замовлення:*\n';
    order.forEach((order) => {
      orderText += `${order.item.title}: ${order.quantity} шт.\n`;
    });

    this.recaptchaV3Service.execute('checkout').pipe(
      tap(() => console.log("Captcha Success")),
      switchMap((token) => this.botService.sendMessage(formText + orderText))
    ).subscribe({
      next: () => {
          this.snackBar.open('Заказ було прийнято в обробку', '', {
            duration: 2000
          });
          this.orderService.clearOrder();
          this.router.navigate(['/']);
      },
      error: (e) => {
        console.error(e);
        this.snackBar.open('Сталася якась помилка, будь ласка, спробуйте ще раз аобі наберіть контактний номер', '', {
          duration: 5000
        });
      }
    });

  }
}
