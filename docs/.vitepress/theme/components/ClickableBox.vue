<template>
    <div class="clickable-box" @click="navigate">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  })
  
  const navigate = () => {
    window.open(props.link, '_blank')
  }
  </script>
  <style scoped>
  .clickable-box-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Space between the boxes */
  }
  
  .clickable-box {
    flex: 1 1 calc(49% - 16px); /* Two boxes per row */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    border: 1px solid #3eaf7c;
    margin: 1%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #f0f9eb;
    color: #3eaf7c;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .clickable-box h3 {
    margin-top: 0;
    font-size: 1.25rem;
  }
  
  .clickable-box p {
    margin-bottom: 0;
  }
  
  .clickable-box:hover {
    background-color: #e4f3d3;
  }
@media (max-width: 768px) {
  .clickable-box {
    flex: 1 1 100%; /* On smaller screens, each box will take full width */
  }
}
  </style>
  