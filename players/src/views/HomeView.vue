<template>
  <div class="">
    <h1 class="display-1">HomePagina</h1>
    <Players />
  </div>
</template>

<script>
import Players from '@/components/bucket/Players.vue';
export default {
  name: 'HomeView',
  components: { Players },
}
</script>
