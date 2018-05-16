<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <button @click="notice()">click me</button>
    <p>{{fullName}} {{count}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- 使用tabs -->
    
    <!-- 希望编译后的html -->
   <!--  <ul>
      <li>label1</li>
      <li>label2</li>
    </ul>
    <div class="tab-container">
      <p>this is tab content</p>
    </div> -->
    <transition name="fade">
      <router-view/>
    </transition>
    <!-- <toast></toast> -->
    <!-- <notification></notification> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  data(){
    return {
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){

    let i = 0
    console.log(this.$store)
    setTimeout(()=>{
      this.updateName('wang')
    },3000)
    // this.updateCount(55)
    // setInterval(()=>{
    //   this.$store.commit('updateCount', ++i)
    // },1000)
    // this.updateCountAsync(5000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateName','updateCount']),
    // toast(){
    //   this.$toast('nihao',{
    //     status: 'caution',
    //     closeTime: 1000
    //   })
    // }
    notice(){
      this.$notice('nihao',{
        btn: 'close',
        // closeTime: 5000
      })
    }
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


