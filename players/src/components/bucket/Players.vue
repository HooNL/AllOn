<template>
  <article class="bg-secondary p-1 text-center mb-5">
    <div class="card p-2 my-2" v-for="(p, ind) in allData" :key="ind">
      <h2 class="card-title">{{ p.naam }}</h2>
      <small class="text-success">{{ p.national }}</small>
      <span class="text-primary">
        <img class="icon" src="@/assets/icons/age.png" alt="Age" />
        {{ p.age }}
      </span>
      <span class="text-primary">
        <img class="icon lin" src="@/assets/icons/length.png" alt="liniaal" />
        {{ p.lengte }}
      </span>
    </div>
  </article>
</template>
<style lang="scss" scoped>
.icon {
  width: 5%;
  margin-right: 5px;
}
.lin {
  margin-right: -5px;
}
</style>
