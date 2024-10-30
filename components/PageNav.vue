<script setup>
import{ ref, defineProps } from "vue";
const headerNavProp = defineProps({
        name: String,
        id: String,
});
</script>
<template>
    <div>
        <a :href="headerNavProp.id"
            class="page-navigation__link">{{ headerNavProp.name }}
        </a>
    </div>
</template>