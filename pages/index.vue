<template>
  <UContainer>
    <h1>Recipes</h1>
    {{ recipe }}
  </UContainer>
</template>

<script setup>
const { data: recipes } = await useFetch('/api/recipes');
const recipe = recipes.value[0];
</script>