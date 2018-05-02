<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{count}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import {mapState, mapGetters} from 'vuex'

export default {
  components: {
    Header,
    Footer,
    // Todo,
  },
  mounted(){
    let i = 0
    console.log(this.$store)
    setTimeout(()=>{
      this.$store.commit('updateName', 'wang')
    },3000)
    setInterval(()=>{
      this.$store.commit('updateCount', ++i)
    },1000)
  },
  computed: {
    ...mapState(['count']),
    // count(){
    //   return this.$store.state.count
    // },
    // fullName(){
    //   return this.$store.getters.fullName
    // }
    ...mapGetters(['fullName'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


