<template>
  <svg width="1em" height="1em" viewBox="0 0 24 24" class="arrow-right-icon">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-4 4l4-4m-4-4l4 4" />
  </svg>
</template>

<style>
.arrow-right-icon {
  transition: transform 0.3s ease;
}

.arrow-right-icon > path {
  stroke-width: 1px;
}

.arrow-right-icon-wrapper:hover .arrow-right-icon {
  transform: translateX(5px);
}
</style>
