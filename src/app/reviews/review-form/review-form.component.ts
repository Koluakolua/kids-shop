import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TelegramBotService} from "../../services/telegram-bot.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required)
  });

  constructor(
    private botService: TelegramBotService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  onSubmitReview() {
    this.botService.sendMessage(JSON.stringify(this.formGroup.value)).subscribe({
      next: () => {
        this.snackBar.open('Модератор перегляне відгук та додасть його', '', {
          duration: 2000
        });
        this.formGroup.reset();
      },
      error: () => {
        this.snackBar.open('Сталася якась помилка, будь ласка, наберіть контактний номер', '', {
          duration: 5000
        });
      }
    });
  }
}
