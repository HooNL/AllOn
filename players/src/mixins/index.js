import Navbar from '@/components/globals/Navbar.vue'
import Footer from '@/components/globals/Footer.vue'
import data from '@/data/playersData'
export default {
  data() {
    return {
      allData: data.players,
    }
  },
  components: { Navbar, Footer },

  methods: {
    getPictureSrc(pic) {
      return require('../assets/img/' + pic)
    },
    goHome() {
      return this.$router.push('/')
    },
  },
}
