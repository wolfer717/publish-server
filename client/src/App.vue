<template>
  <div id="app">
    <router-view></router-view>
    <toast v-show="httpError" :message="httpError"></toast>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {GET_APP_REQUEST_COUNT, GET_APP_HTTP_ERROR} from './store/getter-types'
  import Toast from 'muse-ui/src/toast'
  export default {
    name: 'app',
    computed: {
      ...mapGetters({
        requestCount: GET_APP_REQUEST_COUNT,
        httpError: GET_APP_HTTP_ERROR,
      })
    },
    watch: {
      requestCount (val){
        if (val > 0) {
          this.$Progress.start()
        } else {
          if (!this.httpError) {
            this.$Progress.finish()
          } else {
            this.$Progress.fail()
          }
        }
      }
    },
    components: {
      Toast
    }
  }
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
  }
</style>
