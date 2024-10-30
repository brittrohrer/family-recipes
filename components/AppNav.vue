<script setup>
import {ref} from "vue";


</script>
<template>
    <div class="top-nav">
        <nav class="navbar navbar-expand-lg">
            <div class="navbar-brand">
                 <NuxtLink class="nav-link" to="/"><img src="/public/Logo.png"></NuxtLink>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/recipes/breakfast">Breakfast Recipes</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/recipes/meal">Meal Recipes</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/recipes/dessert">Dessert Recipes</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/recipes/drinks">Drink Recipes</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/recipes/other">Other Recipes</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
img {
    height: 5rem;
    width: 5rem;
}
</style>