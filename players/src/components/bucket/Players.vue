<template>
  <article class="bg-secondary p-1 text-center mb-5">
    <div class="card p-2 my-2" v-for="(p, ind) in allData" :key="ind">
      <h2 class="card-title">{{ p.naam }}</h2>
      <h6 class="text-success p-1" title='Land van herkomst'>{{ p.national }}</h6>

      <div class="row justify-content-center my-3">
        <span
          class="text-primary col col-lg-3"
          :title="`Leeftijd van ${p.naam}`"
        >
          <img class="icon" src="@/assets/icons/age.png" alt="Age" />
          <strong>{{ p.age }}</strong>
        </span>
        <span class="text-primary col col-lg-3" :title="`Lengte van ${p.naam}`">
          <img class="icon" src="@/assets/icons/length.png" alt="liniaal" />
          <strong>{{ p.lengte }}</strong>
        </span>
        <span
          class="text-primary col col-lg-3"
          :title="`Snelheid van ${p.naam}`"
        >
          <img class="icon" src="@/assets/icons/speed.png" alt="snelheid" />
          <strong>{{ p.speed }}</strong>
        </span>
      </div>

      <button class="btn btn-info mt-2 mx-auto" @click="ToPlayer(p)">
        <i class="fa fa-info"></i>
        Details
      </button>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    ToPlayer(p) {
      this.$router.push({
        name: 'player',
        params: {
          naam: p.naam,
          age: p.age,
          nat: p.national,
          leng: p.lengte,
          gewicht: p.gewicht,
          speed: p.speed,
          post: p.post,
          image: p.image,
          url: p.url,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  max-width: 20%;
  margin-right: 3px;
}
.lin {
  margin-right: -5px;
}
</style>
