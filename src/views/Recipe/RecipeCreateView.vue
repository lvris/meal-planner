<template>
  <HeaderBar title="Create Recipe" show-arrow>
    <NButton type="primary" @click="submitForm" class="px-3 my-auto">
      Submit
    </NButton>
  </HeaderBar>

  <NForm ref="formRef" :model="recipe" :rules="rules" p-4>
    <NFormItem label="Name" path="name">
      <NInput v-model:value="recipe.name" />
    </NFormItem>
    <NFormItem label="Description" path="description">
      <NInput v-model:value="recipe.description" type="textarea" />
    </NFormItem>
    <NFormItem label="Image URL" path="imgUrl">
      <NInput v-model:value="recipe.imgUrl" />
    </NFormItem>
    <NFormItem label="Tags" path="tags">
      <n-dynamic-tags v-model:value="recipe.tags" />
    </NFormItem>
    <NFormItem label="Ingredients" path="ingredients">
      <NDynamicInput v-model:value="recipe.ingredients" :on-create="newIngredient">
        <template #default="{ value }">
          <NInput v-model:value="value.name" />
          <NInputNumber v-model:value="value.quantity" />
        </template>
      </NDynamicInput>
    </NFormItem>
    <NFormItem label="Steps" path="steps">
      <NDynamicInput v-model:value="recipe.steps" :on-create="newStep">
        <template #default="{ value }">
          <NInput v-model:value="value.step" />
        </template>
      </NDynamicInput>
    </NFormItem>
  </NForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NForm, NFormItem, NInput, NButton } from 'naive-ui';
import type { IRecipe, Recipe } from '@/interfaces/recipe.interface';

const recipe = ref<IRecipe>({
  id: 0,
  name: '',
  ingredients: [],
  imgUrl: '',
  userId: 0,
  adminId: 0,
  description: '',
  steps: [],
  tags: [],
});

const rules = {
  name: {
    required: true,
    message: 'Name is required',
    trigger: 'blur',
  },
};

const newStep = () => {
  return { no: 0, step: '' };
}

const newIngredient = () => {
  return { name: '', quantity: 0 };
}

const submitForm = () => {
  // TODO: Implement form submission logic
};
</script>
