<template>
  <div class="top">
    <div class="home" />
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue'
// import TopNavBar from '@/components/TopNavBar.vue' // @ is an alias to /src

export default {
  name: 'Home',
  components: {},

  setup() {
    const number = ref(18)
    const state = reactive<any>({
      ob: { name: 'qqq', age: 10 }
    })

    const change = () => {
      number.value++
      state.ob = { name: '1', age: 10 }
    }

    onMounted(() => {})

    return {
      ...toRefs(state),
      number,
      change
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  background: #39424f;
}
.home {
  // height: 550px;
  width: 40%;
  background: #4dacfa;
  border-top: 550px solid #4dacfa;
  border-right: 550px solid #39424f;
  // border-bottom: 50px solid green;
}
</style>
