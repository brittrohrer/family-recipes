<script setup>
import {defineProps, ref} from "vue";

const recipeProp = defineProps({
    name: String,
    cusine: String,
});
</script>
<template>
    <div>
        <h3>
            {{ recipeProp.name }}
        </h3>
        <p>
            {{ recipeProp.cusine }}
        </p>
    </div>
</template>
<style scoped>
    
</style>