<template>
  <HeaderBar title="Recipe">
    <NButton type="primary" @click="$router.push('/create')" class="px-3 my-auto">
      Create
    </NButton>
  </HeaderBar>
  <RecipeFilter px-6 />

  <NDivider />

  <div px-4 pb-4>
    <NInfiniteScroll :distance="10" @load="handleLoad">
      <div flex="~ col" gap-4>
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
      </div>
    </NInfiniteScroll>
  </div>
</template>

<script setup lang="ts">
import { selectRecipeAll } from '@/apis/recipe.api';
import { recipeList } from '@/assets/recipe.mock';
import RecipeButtons from '@/components/Recipe/RecipeButtons.vue';
import RecipeFilter from '@/components/Recipe/RecipeFilter.vue';
import RecipeTags from '@/components/Recipe/RecipeTags.vue';
import type { Recipe, RecipeQuery } from '@/interfaces/recipe.interface';
import { useFilterStore } from '@/stores/filterStore';
import { handleError, onMounted, reactive, ref, type Ref } from 'vue';

const filterStore = useFilterStore();

const list: Ref<Array<Recipe>> = ref(recipeList)

onMounted(() => {
  selectRecipeAll()
    .then(res => {
      list.value = res
    })
})

function handleLoad() {
}
</script>