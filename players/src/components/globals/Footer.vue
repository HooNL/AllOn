<template>
  <footer class="bg-secondary text-center fixed-bottom">
    <p class="text-light p-1">
      Alle rechten voorbehouden door
      <span class="text-warning">Players</span>
      &copy;{{ new Date().getFullYear() }}
    </p>
  </footer>
</template>
<script>
export default {
  name: 'FooTer',
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
