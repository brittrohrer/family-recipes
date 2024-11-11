<script setup>
import {ref} from "vue";
const title = ref("Other Recipes");
const otherRecipes = ref([
    {
        name: 'Ukrainian Babka Bread (Easter Bread)',
        ingrediants: [`2 cakes fresh yeast or 2 packets active dry yeast - 4 1/2 tsp`,
                    `2 c. whole milk - warmed to 110deg F`,
                    `7-8 c. all purpose flour`,
                    `1 1/4 c. granulated sugar`,
                    `1/2 c. unsalted butter - melted and cooled to room temperature`,
                    `5 egg yolks - lightly beaten`,
                    `1 tsp salt`,
                    `1 tbsp vanilla extract`,
                    `** 1 egg yolk - beaten with 1 tbsp water - for the egg wash`],
        directions: [`In a large bowl, stir the yeast into the warm milk to dissolve and let sit for 5 minutes`,
                    `Add 3 cups flour and mix with a wooden spoon. Cover the bowl with plastic wrap and place in a warm,
                    draft-free area until the dough has doubled in size - about 1 1/2 -2 hours.`, 
                    `Transfer the dough to the bowl of an electric stand mixer and add the sugar, melted butter, egg yolks, 
                    salt, and vanilla. Mix to just combine.`,
                    `Add the 4 cups of flour, one at a time; mixing between each cup.`,
                    `Mix on low to medium-low speed unti the dough comes together, adding more flour one tablespoon at a time, if
                    needed. The dough will be a bit sticky`,
                    `Turn the dough out onto a lightly floured surface and knead until it forms a smooth dough,
                    about 5 minutes, again adding more flour one tablespoon at a time, if needed.`,
                    `Divide the dough into three equal sections and shape into loaves, then transfer to three 8x4-inch greased loaf pans.
                    Cover loosely with plastic wrap and let rise until doubled in size, about 1 1/2 hours.`,
                    `When the dough has about 10 minutes left to rise, preheat oven to 400deg F.`,
                    `Brush the tops of the loaves with the egg wash.`,
                    `Bake the loaves for 10 minutes, then reduce the temperature to 350deg F and bake for an additional 40 minutes, or
                    until the loaves are golden brown.`,
                    `If the loaves are beginning to get too dark, place a tented or loose piece of foil over top.`,
                    `Let the bread to cool in the pans for about 15 minutes, then turn the loaves onto a wire rack to cool completely.`],
        time: '*',
        servings: `3 loaves`,
        id: 'other-one',
        id2: '#other-one',
        image: 'https://images.unsplash.com/photo-1533782654613-826a072dd6f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWtyYW5pYW4lMjBicmVhZHxlbnwwfHwwfHx8Mg%3D%3D'
    },
    {
        name: 'Nut Crescent Rolls',
        ingrediants: [`4 c. flour`,
                    `2 1/3 stick of butter`,
                    `1/2 pint sour cream`,
                    `1 yeast dissolved in 1/4 cup of lukewarm water`,
                    `2 teaspoons of sugar`,
                    `3 eggs`,
                    `1 teaspoon vanilla`,
                    `** Filling **`,
                    `1 lb. walnuts-ground`,
                    `1 1/2 cup sugar`],
        directions: [`** Filling - scald enough milk to make paste and add to filling ingredients while still hot ( 1 cup or more).`,
                    `Cut butter into flour as for a pie crust.`, 
                    `Add yeast mixture, beaten eggs, sour cream and vanilla. Mix well.`,
                    `Refrigerate overnite wrapped in saran wrap or in a sealted container.`,
                    `Next day make balls as large as walnuts. Roll to a 5" circle (roll in 2 parts sugar 1 part flour)`,
                    `Spread filling on and roll up to form a crescent.`,
                    `Place on a greased baking sheet and let rise.`,
                    `Bake at 400deg until golden brown about 15-20min.`],
        time: '15-20 minutes',
        servings: `9 dozen`,
        id: 'other-two',
        id2: '#other-two',
        image: 'https://images.unsplash.com/photo-1575613084776-0fa753c446bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jlc2NlbnQlMjBicmVhZHxlbnwwfHwwfHx8Mg%3D%3D'
    },
    {
        name: 'Taco Salad',
        ingrediants: [`Ground beef / turkey`,
                    `lettuce`,
                    `cheese`,
                    `doritos - nacho cheese`,
                    `1 taco seasoning packet per 1 lb of burger`,
                    `Catalina french dressing`],
        directions: [`Brown meat.`,
                    `Drain well.`, 
                    `Add taco mix - do not add water.`,
                    `Let meat cool.`,
                    `Add all together.`],
        time: '*',
        servings: `*`,
        id: 'other-three',
        id2: '#other-three',
        image: 'https://images.unsplash.com/photo-1611699363898-66fabe471e3c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRhY298ZW58MHx8MHx8fDI%3D'
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
                    <li v-for="nav in otherRecipes" :key="nav"
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
                    <li v-for="recipe in otherRecipes"
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