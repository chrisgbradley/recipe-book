import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Dummy", "This is a dummy recipe.", "https://placeimg.com/640/480/any", "Random image from placeimg.com");

  constructor() { }

  ngOnInit() {
  }

}
