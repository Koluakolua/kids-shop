import {Component, Input, OnInit} from '@angular/core';
import {CatalogItem} from "../../../assets/catalog-items";
import {CarouselConfig, Image} from "@ks89/angular-modal-gallery";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  @Input()
  product!: CatalogItem;
  images: Image[] = [];

  carouselConfig: CarouselConfig = {
    modalGalleryEnable: true,
    maxWidth: '100%',
    maxHeight: '100%',
    showArrows: true,
    objectFit: 'cover',
    keyboardEnable: true,
    legacyIE11Mode: false,
  }

  constructor() { }

  ngOnInit(): void {
    this.images = this.product.images.map((image, i) => {
      return new Image(i, {
        img: image
      });
    });
  }

  onEvent(event: any) {
    console.log(event)
  }

}
