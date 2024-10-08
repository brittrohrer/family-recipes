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
    <main>
        <h2>Recipes</h2>
        <ul>
            <li
                v-for="r in recipes" :key="r.name">
                <Card 
                    :name="r.name"
                    :cuisine="r.cuisine"
                />
            </li>
        </ul>
    </main>
</template>