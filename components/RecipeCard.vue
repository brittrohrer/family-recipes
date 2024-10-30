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
    <div :id="recipeProp.id" class="row">

        <div class="recipe-card__img-container col-lg">
            <img class="recipe-card__img img-fluid" :src="recipeProp.image">   
        </div>

        <div class="recipe-card__text-container col-lg">
            <h2 class="recipe-card__name">{{ recipeProp.name }}</h2>

            <div class="recipe-card__description">
                    <p>Cook Time: {{ recipeProp.time }}</p>
                    <p>Servings: {{ recipeProp.servings }}</p>
            </div>

            <div class="row recipe-card__main-content">
                <div class="col-lg-5 col-md-4 recipe-card__ingredients">
                    <h4>Ingredients</h4>
                    <ul class="ingredients__list">
                        <li class="ingredients__item" v-for="ing in ingrediants" :key="ing[0]">{{ ing }}</li>
                    </ul>
                </div>

                <div class="col-lg-7 col-md-8 recipe-card__directions">
                    <h4>Directions</h4>
                    <ol class="directions__list">
                        <li class="directions__item" v-for="dir in directions" :key="dir[0]">{{ dir }}</li>
                    </ol>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
</style>