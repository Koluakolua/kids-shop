import {Component, Input, OnInit} from '@angular/core';
import {CatalogItem, catalogItems} from "../../assets/catalog-items";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalogItems: CatalogItem[] = catalogItems;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onItemClick(i: number) {
    this.router.navigate([catalogItems[i].id]);
  }
}
