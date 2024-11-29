<template>
  <HeaderBar :title="data.name" :show-arrow="true" />

  <NCard>
    <template #cover>
      <NImage :src="data.imgUrl" object-fit="cover" />
    </template>
    <div flex="~ row">
      <div>
        <p>
          {{ data.description }}
        </p>
        <RecipeTags :tags="data.tags" />
      </div>
      <RecipeButtons :id="data.id" flex="~ col" justify-center gap-3 />
    </div>
  </NCard>

  <h2 ml-4>Ingredients</h2>
  <RecipeIngredients :ingredients="data.ingredients" px-4 />

  <NDivider />

  <h2 ml-4>Steps</h2>
  <RecipeSteps :steps="data.steps" px-4 pb-4 />
</template>

<script setup lang="ts">
import { selectRecipeByID } from '@/apis/recipe.api';
import { recipe } from '@/assets/recipe.mock';
import RecipeButtons from '@/components/Recipe/RecipeButtons.vue';
import RecipeSteps from '@/components/Recipe/RecipeSteps.vue';
import RecipeTags from '@/components/Recipe/RecipeTags.vue';
import type { Recipe } from '@/interfaces/recipe.interface';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = Number(route.params.id)

const data: Ref<Recipe> = ref(recipe)

onMounted(() => {
  selectRecipeByID(id)
    .then(res => {
      data.value = res
    })
})
</script>
