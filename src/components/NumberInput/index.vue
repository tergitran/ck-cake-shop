<template>
  <span class="input-wrapper">
    <button @click="onChange(value - 1)">-</button>
    <input
      type="number"
      :value="value"
      @input="onChange(Number($event.target.value))"
    />
    <button @click="onChange(value + 1)">+</button>
  </span>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
