import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "../../shopping-list";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
