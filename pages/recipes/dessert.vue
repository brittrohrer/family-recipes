<script setup>
import {ref} from "vue";
const title = ref("Dessert Recipes");
const dessertRecipes = ref([
    {
        name: 'Strawberry Pretzel Salad',
        ingrediants: [`2 1/2 c. crushed pretzels`,
                    `3 tablespoons sugar`,
                    `3/4 c. butter or margarine`,
                    `1 8-ounce package cream cheese, softened`,
                    `1 c. sugar`,
                    `1 12-ounce cool whip`,
                    `1 6-ounce package strawberry jello`,
                    `2 cups boiling water`,
                    `1 10-ounce bag frozen sliced strawberries`,
                    `whipped cream or cool whip for garnishing`],
        directions: [`** Topping **`,
                    `Add 2 cups boiling water to jello; mix well.`,
                    `Add strawberries to jello. Cool jello mixture in fridge until thick`, 
                    `** Crust **`,
                    `Melt butter; add sugar`,
                    `Crush pretzels with rolling pin and add to butter mixture.`,
                    `Press into bottom of greased 9x13 inch baking pan.`,
                    `Bake 10 minutes at 350 degrees; cool well.`,
                    `** Filling **`,
                    `Combine cream cheese and 1 cup sugar; beat well.`,
                    `Add cool whip; spread over cooled crust.`,
                    `Pour or spoon thickened jello mixture over cream cheese mixture and set until firm.`,
                    `Spread additional cool whip over the top, cover with foil and refrigerate for at least 2 hrs.`],
        time: '*',
        servings: `*`,
        id: 'dessert-one',
        id2: '#dessert-one',
        image: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeSUyMHByZXR6ZWx8ZW58MHx8MHx8fDI%3D'
    },
    {
        name: 'Cranberry Salad',
        ingrediants: [`1 bag cranberries - chopped`,
                    `1/4 lb mini marshmellows`,
                    `1 cup crushed pineapple - drained`,
                    `3/4 cup sugar`,
                    `1/2 cup chopped nuts`,
                    `1 small whipping cream`,
                    `1 pinch freshly ground black pepper`],
        directions: [`Mix cranberries, pineapple, and marshmellows together. Let sit overnight in refrigerator.`,
                    `Add sugar, chopped nuts and whipping cream (beaten).`, 
                    `Fold in whipping cream.`],
        time: '*',
        servings: `*`,
        id: 'dessert-two',
        id2: '#dessert-two',
        image: 'https://images.unsplash.com/photo-1601406075033-f7a4964d5aa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNyYW5iZXJyeSUyMGZsdWZmfGVufDB8fDB8fHwy'
    },
    {
        name: 'Monster Mash Party Mix',
        ingrediants: [`1 10 1/2-oz. pkg. ritz miniature peanut butter filled crackers`,
                    `1 11oz. pkg. small pretzel twists`,
                    `1 cup dry roasted peanuts`,
                    `1/2 cup butter`,
                    `1 cup sugar`,
                    `1/2 cup light corn syrup`,
                    `2 Tbs. vanilla`,
                    `1 tsp. baking soda`,
                    `1 18 1/2 oz. pkg. candy corn`,
                    `1 10 oz. pkg. M&Ms - plain`],
        directions: [`Preheat oven to 250deg`,
                    `Combine peanut butter filled Ritz, pretzels and peanuts and place in a large greased baking pan; set aside.`, 
                    `In saucepan combine butter, sugar, and corn syrup and bring to a boil over medium heat; boil for 5 minutes. 
                    Remove from heat and stir in vanilla and baking soda. Mixture will foam up. Pour over combined pretzel mixture and stir until coated.`,
                    `Bake for 45 minutes, stirring well every 10 minutes.`,
                    `After baking pour out onto wax paper lined cookies sheets and break mixture apart while still warm. When cooled
                    completely toss with candies.`],
        time: '*',
        servings: `*`,
        id: 'dessert-three',
        id2: '#dessert-three',
        image: 'https://images.unsplash.com/photo-1637209697457-f88bc41d4545?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZHklMjBjb3JufGVufDB8fDB8fHwy'
    },
    {
        name: 'Ice Cream Cake',
        ingrediants: [`12 (or less) - Ice cream sandwiches`,
                    `Hot fudge topping or caramel topping or both`,
                    `Ice cream - any flavor - softened before`,
                    `Cool whip`,
                    `Any stir-ins - candies etc.`],
        directions: [`Cover bottom of 9x13 dish with ice cream sandwiches.`,
                    `Coat with fidge or caramel and freeze for a short time.`,
                    `Layer the remaining ingredients in any order, ending with the hot fudge or caramel topping on the top.`],
        time: '*',
        servings: `10`,
        id: 'dessert-four',
        id2: '#dessert-four',
        image: 'https://images.unsplash.com/photo-1588195542907-a0c0a2ac3312?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGljZSUyMGNyZWFtJTIwY2FrZXxlbnwwfHwwfHx8Mg%3D%3D'
    }
    
]);



</script>

<template>
    <div class="page">
        <header class="page__header">
            <h1 class="page__title">{{ title }}</h1> 
        </header>
        <main>
            <section class="page-navigation">
                <ul class="page-navigation__list">
                    <li v-for="nav in dessertRecipes" :key="nav"
                    class="page-navigation__item">
                    <PageNav
                    :id="nav.id2"
                    :name="nav.name"
                    />
                    </li>
                </ul>
            </section>
            <section>
                <ul class="recipe-container">
                    <li v-for="recipe in dessertRecipes"
                        :key="recipe.name">
                        <RecipeCard
                            :name="recipe.name"
                            :time="recipe.time"
                            :servings="recipe.servings"
                            :id="recipe.id"
                            :image="recipe.image"
                            :ingrediants="recipe.ingrediants"
                            :directions="recipe.directions"
                            />
                    </li>
                </ul>
            </section>
        </main>
        <UpButton />
    </div>
</template>
<style scoped>

</style>