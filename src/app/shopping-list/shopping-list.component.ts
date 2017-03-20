import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from "./shopping-list.service";
import { Ingredients } from "../shared/ingredients";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredients[] = [];
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
