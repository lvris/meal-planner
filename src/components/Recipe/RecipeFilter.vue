<template>
  <div>
    <h3>筛选 Recipe</h3>
    <div>
      <label for="tag">按照 Tag: </label>
      <input type="text" id="tag" v-model="filters.tag" @input="applyFilters" />
    </div>
    <div>
      <label for="ingredient">按照食材: </label>
      <input type="text" id="ingredient" v-model="filters.ingredient" @input="applyFilters" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeFilter',
  props: {
    filter: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      filters: {
        tag: '',
        ingredient: ''
      }
    };
  },
  watch: {
    filter: {
      handler(newVal) {
        this.filters = newVal;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    applyFilters() {
      this.$emit('update:filter', this.filters);
    }
  }
};
</script>
