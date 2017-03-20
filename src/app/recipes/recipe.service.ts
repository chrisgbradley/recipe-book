import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredients } from "../shared/ingredients";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Dummy1",
      "This is a dummy recipe.",
      "https://placeimg.com/640/480/any",
      "Random image from placeimg.com",
      [
        new Ingredients("parsley", 5),
        new Ingredients("oregano", 2)
      ]),
    new Recipe(
      "Dummy2",
      "This is a dummy recipe.",
      "https://placeimg.com/640/480/any",
      "Random image from placeimg.com",
      [
        new Ingredients("parsley", 9),
        new Ingredients("oregano", 7)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
