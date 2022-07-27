<template>
  <article class="my-3">
    <h2 class="display-3">Details van de speler</h2>
    <table class="table table-secondary">
      <thead>
        <tr class="table-secondary">
          <th>Naam</th>
          <th>Leeftijd</th>
          <th>Post</th>
          <th>Snelheid</th>
          <th>Gewicht</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-warning">
          <td>{{ Player.naam }}</td>
          <td>{{ Player.age }}</td>
          <td>{{ Player.post }}</td>
          <td>{{ Player.speed }} km/u</td>
          <td>{{ Player.gewicht }}kg</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <img
      class="img-fluid col-xl-8 mb-2"
      :src="getPictureSrc(Player.image)"
      :alt="Player.naam"
      :title="Player.naam" 
    />
    <p class="text-center col-xl-3 align-self-xl-center ">
      Wil je meer lezen over <small class="lead">{{ Player.naam }}</small
      >?
      <a
        :href="Player.url"
        target="_blank"
        class="btn btn-outline-info btn-sm"
        rel="noopener noreferrer"
        >Lees verder</a
      >
    </p></div>

    <button class="btn btn-light" @click="goHome">Terug</button>
    <br />
    <br />
  </article>
</template>

<script>
export default {
  created() {
    this.Player = this.$route.params
  },
}
</script>

<style lang="scss" scoped></style>
