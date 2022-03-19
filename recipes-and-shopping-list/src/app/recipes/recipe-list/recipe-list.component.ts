import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../Recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
    recipes: Recipe[] = [
        new Recipe("The testing Pizza", "Some testing pizza!", "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"),
        new Recipe("The testing Salad", "Some testing salad!", "https://i.imgur.com/nyHXfu4.jpg"),
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
