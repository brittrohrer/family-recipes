<script setup>
import { defineProps, ref } from 'vue';

const recipeProp = defineProps({
    name: String,
    cuisine: String,
    id: Number,
})
</script>
<template>
        <div>
            <h3>
                {{ recipeProp.name }}
            </h3>
            <div>
                <p>cuisine: {{ recipeProp.cuisine }}</p>
                <p>id: {{ recipeProp.id }}</p>
            </div>
         </div>
</template>