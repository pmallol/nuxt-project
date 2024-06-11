export default defineCachedEventHandler(async (event) => {
  const { recipes } = await $fetch<{recipes: unknown}>('https://api.spoonacular.com/recipes/random', {
    query: {
      limitLicense: true,
      number: 100,
      apiKey: useRuntimeConfig().spoonacular.apiKey
    }
  })
  return recipes
}, {
  base: 'recipes',
  getKey: () => 'recipes',
  shouldByPassCache: () => false,
  maxAge: 1000 * 60 * 60 * 24 // 1 day
  staleMaxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
});