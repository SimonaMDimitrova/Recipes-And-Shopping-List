import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./Recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("The testing Pizza", "Some testing pizza!", "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
        [
            new Ingredient("Ing1", 1),
            new Ingredient("Ing2", 1),
            new Ingredient("Ing3", 1),
        ]),
        new Recipe("The testing Salad", "Some testing salad!", "https://i.imgur.com/nyHXfu4.jpg",
        [
            new Ingredient("Ing1", 1),
            new Ingredient("Ing2", 1),
            new Ingredient("Ing3", 1),
        ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}