<template>
  <HeaderBar title="Plan">
    <NDatePicker type="week" class="px-3 my-auto" :default-value="new Date().getTime()" />
  </HeaderBar>

  <div class="m-4 flex overflow-x-auto gap-3">
    <NList v-for="(day, index) in days" :key="index" hoverable clickable m-auto>
      <NListItem class="w-30 text-align-center"> {{ day }}</NListItem>
      <NListItem v-for="meal in meals" :key="meal" class="h-30" @click="openDrawer(day, meal)">
        <!-- TODO Empty / Avatar of meal (Different click) -->
        <div v-if="mealPlan[day]?.[meal]" class="meal-item">
          {{ mealPlan[day][meal] }}
        </div>
      </NListItem>
    </NList>
  </div>

  <NButtonGroup class="flex justify-center pt-5">
    <NButton type="tertiary" size="large" @click="router.push('/grocery')">
      Go Shopping
      <div ml-2 font-size-5 class="i-solar-shop-2-linear" />
    </NButton>
    <NButton type="primary" size="large" @click="showDrawer = true">
      Export To Calender
      <div ml-2 font-size-5 class="i-solar-calendar-add-linear" />
    </NButton>
  </NButtonGroup>

  <NDrawer v-model:show="showDrawer" :height="700" placement="bottom" :auto-focus="false">
    <NDrawerContent>
      <template #header>
        <RecipeFilter />
      </template>
      <NList hoverable clickable>
        <NListItem v-for="recipe in list" :key="recipe.id" @click="handleRecipeClick(recipe.id)">
          <h3 m-0>{{ recipe.name }}</h3>
        </NListItem>
      </NList>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/Layouts/HeaderBar.vue';
import PlanCube from '@/components/Plan/PlanCube.vue';
import RecipeFilter from '@/components/Recipe/RecipeFilter.vue';
import { Day, Meal, days, meals } from '@/interfaces/plan.interface';
import type { Recipe } from '@/interfaces/recipe.interface';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showDrawer = ref(false);

const mealPlan = ref<{ [day: string]: { [meal: string]: number } }>({});
const selectedDay = ref<Day>(Day.Monday);
const selectedMeal = ref<Meal>(Meal.Breakfast);

const openDrawer = (day: Day, meal: Meal) => {
  selectedDay.value = day;
  selectedMeal.value = meal;
  showDrawer.value = true;
};

const handleRecipeClick = (dishId: number) => {
  let day = selectedDay.value;
  if (!mealPlan.value[day]) {
    mealPlan.value[day] = {};
  }
  mealPlan.value[day][selectedMeal.value] = dishId;
  showDrawer.value = false;
}

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
