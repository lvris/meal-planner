<template>
  <HeaderBar title="Documents" show-arrow />
  <div p-4>
    <div v-html="renderedMarkdown" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
const markdownText = ref(`### Hello, World!
This is some **Markdown** text that will be rendered as HTML.`);

const renderedMarkdown = md.render(markdownText.value);
</script>
