<template>
  <UContainer>
    <h1 class="mt-4 font-bold text-xl pt-12 mb-4">{{ recipe.title }}</h1>
    <UBadge
      v-for="label in recipe.dishTypes"
      :label="label"
      class="mr-2"
      variant="subtle"
    />

    <section class="mt-4 flex flex-col md:flex-row-reverse gap-4 w-full">
      <NuxtImg
        :src="recipe.image"
        :alt="recipe.title"
        class="object-cover w-full"
      />
      <p v-html="recipe.summary" class="text-lg max-w-[40ch]"></p>
    </section>

    <div class="flex flex-col md:flex-row gap-2 md:gap-8">
      <section class="mt-8">
        <h2 class="font-bold text-lg mb-4">Ingredients</h2>

        <UTable :rows="recipe.extendedIngredients" :columns="columns">
          <template #name-data="{ row }">
            <span class="flex flex-row gap-2 items-center">
              <NuxtImg
                provider="spoonacular"
                :src="row.image"
                :width="20"
                :height="20"
              />
              {{ row.name }}
            </span>
          </template>
        </UTable>
      </section>

      <section class="mt-8">
        <h2 class="font-bold text-lg mb-4">Steps</h2>
        <ol>
          <li
            v-for="{ number, step } in recipe.analyzedInstructions?.[0].steps"
            class="text-lg flex items-baseline gap-2"
          >
            <span
              class="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-400 dark:bg-opacity-190 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary font-bold h-5 w-5"
              >{{ number }}</span
            >
            {{ step }}
          </li>
        </ol>
      </section>
    </div>

    <UButton external :src="recipe.sourceUrl" class="mt-4">
      View original recipe on {{ recipe.sourceName }}
    </UButton>
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
