<script setup>
import { defineProps, ref } from 'vue';

const recipeProp = defineProps({
    name: String,
    cuisine: String,
})
</script>
<template>
    <div>
        <div>
            <h3>
                {{ recipeProp.name }}
            </h3>
            <p>cuisine: {{ recipeProp.cuisine }}</p>
        </div>
    </div>
</template>