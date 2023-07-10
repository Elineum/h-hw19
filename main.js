class Recipe {
  constructor(name, ingredients, instructions, cookingTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.cookingTime = cookingTime;
  }

  isValid() {
    return (
      this.name && this.ingredients && this.instructions && this.cookingTime
    );
  }
}

class RecipeBook {
  recipesArr = [];

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipesArr.push(recipe);
    }
  }

  findRecipesArrByCookingTime(cookingTime) {
    return this.recipesArr
      .filter((recipe) => recipe.cookingTime <= cookingTime)
      .map((recipe) => recipe.name)
      .join(", ");
  }

  findRecipesArrByIngredients(ingredients) {
    return this.recipesArr
      .filter((recipe) =>
        ingredients.some((ingredient) =>
          recipe.ingredients.includes(ingredient)
        )
      )
      .map((recipe) => recipe.name);
  }
}

const recipe1 = new Recipe(
  "BBQ Ribs",
  ["seaweed", "bok choy"],
  "description",
  30
);
const recipe2 = new Recipe(
  "Nachos",
  ["peppers", "broccoli"],
  "description",
  60
);
const recipe3 = new Recipe(
  "French Fries",
  ["mashrooms", "cabbage"],
  "description",
  120
);
const recipe4 = new Recipe(
  "New York Steak",
  ["tomato", "onion"],
  "description",
  80
);
const recipe5 = new Recipe(
  "Spaghetti",
  ["carrot", "tomato"],
  "description",
  10
);
const recipe6 = new Recipe(
  "Grilled Chicken Sandwich",
  ["potato", "carrot"],
  "description",
  25
);
const recipe7 = new Recipe(
  "Tossed Salad",
  ["potato", "carrot", "tomato"],
  "description",
  25
);
const invalidRecipe = new Recipe("Wtf?", [], "", null);

const recipeBook = new RecipeBook();

recipeBook.addRecipe(recipe1);
recipeBook.addRecipe(recipe2);
recipeBook.addRecipe(recipe3);
recipeBook.addRecipe(recipe4);
recipeBook.addRecipe(recipe5);
recipeBook.addRecipe(recipe6);
recipeBook.addRecipe(invalidRecipe);

const maxCookingTime = 60;
const ingredientsFind = ["potato", "carrot"];
console.log(
  `Dishes, cooking takes up to ${maxCookingTime} minutes: ${recipeBook.findRecipesArrByCookingTime(
    maxCookingTime
  )}`
);
recipeBook
  .findRecipesArrByIngredients(ingredientsFind)
  .forEach((recipeName) => {
    console.log(
      `You can cook ${recipeName} with this products: ${ingredientsFind.join(
        ", "
      )}`
    );
  });
