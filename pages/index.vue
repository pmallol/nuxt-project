<template>
  <UContainer>
    <h1 class="mt-4 font-bold text-xl pt-12 mb-4">{{ recipe.title }}</h1>
    <UBadge v-for="label in recipe.dishTypes" :label="label" class="mr-2" />
    
    <section class="mt-4">
      <NuxtImg :src="recipe.image" :alt="recipe.title" class="object-cover w-full" />
      <p v-html="recipe.summary" class="text-lg max-w-[40ch]"></p>
    </section>

    <section class="mt-8">
      <h2 class="font-bold text-lg mb-4">Ingredients</h2>

      <UTable :rows="recipe.extendedIngredients" :columns="columns" >
        <template #name-data="{ row }">
          
          {{row.name}}
        </template>
      </UTable>
    </section>
  </UContainer>
</template>

<script setup>
const { data: recipes } = await useFetch('/api/recipes');
const recipe = recipes.value[0];

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'amount', label: 'Amount' },
  { key: 'unit', label: 'Unit' },
];

</script>