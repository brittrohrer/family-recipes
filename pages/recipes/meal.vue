<script setup>
import {ref} from "vue";
const title = ref("Meal Recipes")
const mealRecipes = ref([
    {
        name: 'Sloppy Joes ',
        ingrediants: [`1 chopped onion`,
                    `1/3 c. grated carrots`,
                    `1 1/2 lb. ground beef/turkey`,
                    `1 c. ketchup`,
                    `2 Tbsp. mustard`,
                    `2 Tbsp. vinegar`,
                    `2 Tbsp. brown sugar`],
        directions: [`Saute onion and carrots.`,
                    `Add ground meat and brown.`, 
                    `Add remaining ingredients and simmer for about 1 hr or until thick.`],
        time: '*',
        servings: `*`,
        id: 'meal-one',
        id2: '#meal-one',
        image: 'https://images.unsplash.com/photo-1665799363044-11b3e2f63fbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2xvcHB5JTIwam9lfGVufDB8fDB8fHwy'
    },
    {
        name: 'M recipe two',
        ingrediants: [`1 tablespoon butter`,
                    `3 cloves garlic, minced`,
                    `1 cup evaporated milk`,
                    `1/4 cup heavy cream`,
                    `1 cup freshly shaved Parmesan cheese`,
                    `18 ounces refrigerated gnocchi`,
                    `1 pinch freshly ground black pepper`],
        directions: [`lorem 1 Lorem ipsum odor amet, consectetuer adipiscing elit.`,
                    `lorem 2 Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Iaculis pretium luctus odio hendrerit dignissim aliquet ligula adipiscing? 
                    Finibus orci ut ornare, egestas nec eleifend diam lectus dis. Tellus efficitur 
                    accumsan mollis rutrum tincidunt ut praesent vel.`, 
                    `lorem 3 luctus odio hendrerit dignissim aliquet ligula adipiscing? 
                    Finibus orci ut ornare, egestas nec eleifend diam lectus dis. Tellus efficitur 
                    accumsan mollis rutrum tincidunt ut praesent vel.`],
        time: '2 minutes',
        servings: 12,
        id: 'meal-two',
        id2: '#meal-two',
        image: 'https://images.unsplash.com/photo-1486428128344-5413e434ad35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'M recipe three',
        ingrediants: [`1 tablespoon butter`,
                    `3 cloves garlic, minced`,
                    `1 cup evaporated milk`,
                    `1/4 cup heavy cream`,
                    `1 cup freshly shaved Parmesan cheese`,
                    `18 ounces refrigerated gnocchi`,
                    `1 pinch freshly ground black pepper`],
        directions: [`lorem 1 Lorem ipsum odor amet, consectetuer adipiscing elit.`,
                    `lorem 2 Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Iaculis pretium luctus odio hendrerit dignissim aliquet ligula adipiscing? 
                    Finibus orci ut ornare, egestas nec eleifend diam lectus dis. Tellus efficitur 
                    accumsan mollis rutrum tincidunt ut praesent vel.`, 
                    `lorem 3 luctus odio hendrerit dignissim aliquet ligula adipiscing? 
                    Finibus orci ut ornare, egestas nec eleifend diam lectus dis. Tellus efficitur 
                    accumsan mollis rutrum tincidunt ut praesent vel.`],
        time: '2 minutes',
        servings: 12,
        id: 'meal-three',
        id2: '#meal-three',
        image: 'https://images.unsplash.com/photo-1486428128344-5413e434ad35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    
]);



</script>

<template>
    <div class="page">
        <header class="page__header">
            <h1 class="page__title">{{ title }}</h1> 
        </header>
        <main id="page-top">
            <section class="page-navigation">
                <ul class="row page-navigation__list">
                    <li v-for="nav in mealRecipes" :key="nav"
                    class=" col-md-2 page-navigation__item">
                    <PageNav
                    :id="nav.id2"
                    :name="nav.name"
                    />
                    </li>
                </ul>
            </section>
            <section>
                <ul class="recipe-container">
                    <li v-for="recipe in mealRecipes"
                        :key="recipe.name"
                        class="recipe-card__container">
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