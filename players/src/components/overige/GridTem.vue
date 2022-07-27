<template>
  <div class="row px-2 px-lg-0 justify-content-center">
    <p
      class="col-6 col-md-3 col-lg-4 d-flex border justify-content-center p-2 bg-light"
      v-for="(een, ind) in 12"
      :key="ind"
    >
      Item {{ ind + 1 }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'GridTem',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
