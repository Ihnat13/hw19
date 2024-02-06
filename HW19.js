class Recipe {
    constructor(name, ingredients, desc, time) {
        this.name = name;
        this.ingredients = ingredients;
        this.desc = desc;
        this.time = time;
    }

    isValid() {
        return this.name && this.ingredients && this.desc && this.time;
    }
}

class RecipeBook {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        if (recipe.isValid()) {
            this.recipes.push(recipe);
        }
    }

    findRecipesByTime(maxCookingTime) {
        return this.recipes.filter(recipe => recipe.time < maxCookingTime);
    }

    findRecipesByIngredients(requiredIngredients) {
        return this.recipes.filter(recipe => requiredIngredients.every(ingredient => recipe.ingredients.includes(ingredient)));
    }
}
const recipeBook = new RecipeBook();
const recipe1 = new Recipe("Запеченный картофель", ["лук", "чеснок", "бульба", "курица"], "Нарезал кубиками и закинул а в свободное время кодишь!", 30);
const recipe2 = new Recipe("Курица карри", ["курица", "карри", "куркума", "рис"], "Лениво закинул в духовку и сварил рис", 60);
const recipe3 = new Recipe("Овощи на гриле", ["грибы", "морковка", "бульба", "баклажан"], "Бахаем на кастрике обьязательно под бутылочку светлого нефильтрованного", 120);
const recipe4 = new Recipe("Invalid Recipe", [], "", 0);

recipeBook.addRecipe(recipe1);
recipeBook.addRecipe(recipe2);
recipeBook.addRecipe(recipe3);
recipeBook.addRecipe(recipe4);

function recipesByTime (time) {
    const src4Receipe = recipeBook.findRecipesByTime(time)
    src4Receipe.length > 0 ? src4Receipe.forEach(recipe => console.log(recipe.name)) : console.log(`No items `);

}
recipesByTime(80)

function recipesByIngrs (...ings) {
    const src4Ings = [...ings];
    if (src4Ings.length > 0) {
        recipeBook.findRecipesByIngredients(src4Ings).forEach(recipe => console.log(recipe.name))
    } else {
    console.log(`No items `);
    }
}
recipesByIngrs()

