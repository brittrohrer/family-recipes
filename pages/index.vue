<script setup>
import {ref, onMounted} from "vue";

const recipes = ref([]);
onMounted(async() => {
    try{
        const response = await fetch(
        "https://dummyjson.com/recipes"
        );

        recipes.value = await response.json();
        console.log(recipes.value);
    } catch (error) {
        console.log(error);
    }
})

</script>
<template>
    <div>
        <main>
            <p>hello</p>
            <h2>Recipes</h2>
            <div>
                <ul>
                    <li 
                        v-for="recipe in recipes" :key="recipe.name">
                        <RecipeCard 
                        :name="recipe.name"
                        :cusine="recipe.cusine"
                        />
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>