<template>
  <div>
<h2>App Component</h2>
<hr>
<ul>
<CheckboxItem />
<CheckboxItem />
<CheckboxItem />
<CheckboxItem />
</ul>
  </div>
</template>

<script setup>
createApp(App).component('CheckboxItem', CheckboxItem).mount('#app');
</script>

<style lang="scss" scoped>

</style>