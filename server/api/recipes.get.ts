export default defineEventHandler(async (event) => {
  const { recipes } = await $fetch<{recipes: unknown}>('https://api.spoonacular.com/recipes/random', {
    query: {
      limitLicense: true,
      number: 100,
      apiKey: useRuntimeConfig().spoonacular.apiKey
    }
  })
  return recipes
});