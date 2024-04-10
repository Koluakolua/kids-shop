import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogItemComponent } from './catalog/catalog-item/catalog-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ImageCarouselComponent } from './product/image-carousel/image-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CartDialogComponent } from './cart/cart-dialog/cart-dialog.component';
import { OrderComponent } from './cart/order/order.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTableModule} from "@angular/material/table";
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from './reviews/review-form/review-form.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from "ng-recaptcha";
import {GalleryModule} from "@ks89/angular-modal-gallery";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    CatalogItemComponent,
    ProductComponent,
    ImageCarouselComponent,
    CartDialogComponent,
    OrderComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    ReviewsComponent,
    ReviewFormComponent,

  ],
  imports: [
    MatSnackBarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    RecaptchaV3Module,
    GalleryModule
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Lc1Y7UpAAAAAL3v8noVmhbN6QsY6RL2xmAuvcuE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
