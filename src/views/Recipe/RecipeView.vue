<template>
  <HeaderBar title="Recipe"></HeaderBar>
  <NFlex gap="3" class="m-6">
    <NCard v-for="recipe in list" :key="recipe.id" :recipe="recipe" hoverable>
      <template #header>
        {{ recipe.name }}
      </template>
      <template #header-extra>
        <RecipeTags :tags="recipe.tags" />
      </template>
      <template #footer>
        <RecipeButtons :id="recipe.id" show-link flex="~ row" gap-3 justify-end />
      </template>
      {{ recipe.description }}
    </NCard>
  </NFlex>
</template>

<script setup lang="ts">
import RecipeButtons from '@/components/Recipe/RecipeButtons.vue';
import RecipeTags from '@/components/Recipe/RecipeTags.vue';
import type { Recipe } from '@/interfaces/recipe.interface';

const list: Recipe[] = [
  {
    "id": 6,
    "name": "Vegetable Stir-Fry",
    "userId": 5,
    "ingredients": {
      "Broccoli": 200,
      "Carrot": 150,
      "Bell Pepper": 100,
      "Soy Sauce": 3,
      "Snow Peas": 50,
      "Garlic": 3,
      "Ginger": 1,
      "Olive Oil": 2
    },
    "steps": {
      "1": "Chop all vegetables into bite-sized pieces.",
      "2": "Heat olive oil in a wok and sauté minced garlic and ginger until fragrant.",
      "3": "Add all the vegetables and stir-fry on high heat for 5-7 minutes.",
      "4": "Add soy sauce and stir well.",
      "5": "Serve hot with steamed rice or noodles."
    },
    "description": "A quick and healthy vegetable stir-fry, perfect for a light meal.",
    "tags": [
      "healthy",
      "quick",
      "vegan"
    ]
  },
  {
    "id": 5,
    "name": "Tomato Egg Stir-fry",
    "userId": 1,
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
    "description": "A quick and easy Chinese-style stir-fry dish featuring tomatoes and eggs.",
    "tags": [
      "quick",
      "healthy",
      "easy"
    ]
  },
  {
    "id": 4,
    "name": "Spaghetti Bolognese",
    "userId": 2,
    "ingredients": {
      "Ground Beef": 300,
      "Salt": 1,
      "Spaghetti": 200,
      "Onion": 1,
      "Pepper": 1,
      "Olive Oil": 2,
      "Tomato": 150
    },
    "steps": {
      "1": "Boil water and cook the spaghetti according to package instructions.",
      "2": "Heat olive oil in a pan and sauté chopped onion and garlic until fragrant.",
      "3": "Add ground beef and cook until browned.",
      "4": "Stir in the tomato sauce and let simmer for 10-15 minutes.",
      "5": "Season with salt and pepper.",
      "6": "Serve the sauce over the cooked spaghetti."
    },
    "description": "A classic Italian pasta dish with a rich meat sauce.",
    "tags": [
      "classic",
      "italian",
      "hearty"
    ]
  }
]
</script>