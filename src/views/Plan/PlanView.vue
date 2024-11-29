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
      <div class="dish-list">
        <div v-for="dish in dishes" :key="dish.id" class="dish-item" @click="handleDishClick(dish.id)">
          {{ dish.name }}
        </div>
      </div>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/Layouts/HeaderBar.vue';
import RecipeFilter from '@/components/Recipe/RecipeFilter.vue';
import { Day, Meal, days, meals } from '@/interfaces/plan.interface';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showDrawer = ref(false);

const mealPlan = ref<{ [day: string]: { [meal: string]: any } }>({});
const selectedDay = ref<Day>(Day.Monday);
const selectedMeal = ref<Meal>(Meal.Breakfast);

const dishes = ref([
  { id: 1, name: 'Spaghetti' },
  { id: 2, name: 'Salad' },
  { id: 3, name: 'Pizza' },
]);

const openDrawer = (day: Day, meal: Meal) => {
  selectedDay.value = day;
  selectedMeal.value = meal;
  showDrawer.value = true;
};

const handleDishClick = (dishId: number) => {
  let day = selectedDay.value;
  if (!mealPlan.value[day]) {
    mealPlan.value[day] = {};
  }
  const selectedDish = dishes.value.find(dish => dish.id === dishId);
  if (selectedDish?.name != undefined)
    mealPlan.value[day][selectedMeal.value] = selectedDish.name;
  showDrawer.value = false;
}
</script>
