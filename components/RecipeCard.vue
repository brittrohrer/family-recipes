<script setup>
import{ ref, defineProps } from "vue";
const recipeProp = defineProps({
        name: String,
        time: String,
        servings: String,
        id: String,
        image: String,
        ingrediants: Array,
        directions: Array,
});

</script>
<template>
    <div :id="recipeProp.id" class="recipe-card__container">
        
        <div class="row recipe-card__top-container">
            <div class="col-md-6 ecipe-card__img-container ">
                <img class="recipe-card__img img-fluid" :src="recipeProp.image">
            </div>
            <div class="col-md-6 recipe-card__top-text">
                <h2 class="recipe-card__name">{{ recipeProp.name }}</h2>
                <div class="recipe-card__description">
                    <p>Cook Time: {{ recipeProp.time }}</p>
                    <p>Servings: {{ recipeProp.servings }}</p>
                </div>
            </div>
        </div>
        
        <div class=" row recipe-card__bottom-container">
            
            <div class="col-lg-4 recipe-card__ingredients">
                <h4 class="recipe-card__title">Ingredients</h4>
                <ul class="ingredients__list">
                    <li class="ingredients__item" v-for="ing in ingrediants" :key="ing[0]">{{ ing }}</li>
                </ul>
            </div>
            <div class="col-lg-8 recipe-card__directions">
                <h4 class="recipe-card__title">Directions</h4>
                <ol class="directions__list">
                    <li class="directions__item" v-for="dir in directions" :key="dir[0]">{{ dir }}</li>
                </ol>
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>