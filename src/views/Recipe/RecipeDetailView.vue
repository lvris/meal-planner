<template>
  <HeaderBar :title="data.name" :show-arrow="true" />

  <NCard>
    <template #cover>
      <NImage :src="data.imgUrl" object-fit="cover" />
    </template>
    {{ data.description }}
    <template #footer>
      <RecipeTags :tags="data.tags" />
    </template>
  </NCard>

  <h2 ml-4>Ingredients</h2>
  <RecipeIngredients :ingredients="data.ingredients" px-4 />

  <NDivider />

  <h2 ml-4>Steps</h2>
  <RecipeSteps :steps="data.steps" px-4 pb-4 />
</template>

<script setup lang="ts">
import RecipeSteps from '@/components/Recipe/RecipeSteps.vue';
import RecipeTags from '@/components/Recipe/RecipeTags.vue';
import type { Recipe } from '@/interfaces/recipe.interface';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = Number(route.params.id)

const data: Recipe = {
  "id": 5,
  "name": "Tomato Egg Stir-fry",
  "description": "A quick and easy Chinese-style stir-fry dish featuring tomatoes and eggs.",
  "userId": 1,
  "imgUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "ingredients": {
    "Salt": 1,
    "egg": 3,
    "Tomato": 2
  },
  "steps": {
    "1": "Wash and chop the tomatoes.",
    "2": "Beat the eggs in a bowl.",
    "3": "Heat oil in a pan and cook the eggs.",
    "4": "Add tomatoes and stir-fry with the eggs.",
    "5": "Add salt to taste and cook until tender."
  },
  "tags": [
    "quick",
    "healthy",
    "easy"
  ]
}

onMounted(() => {
  console.log(id)
})
</script>
