<template>
  <div class="info-container">
    <div class="avatar"><img src="@/assets/logo.png"></div>
    <!-- <div class="title">{{ userInfo.name }}</div> -->
    <div class="desc">{{ userInfo.desc }}</div>
    <div class="link">
      <img
        v-for="link in userInfo.links"
        :key="link.link"
        :src="link.logo"
        @click="hrefClick(link.link)"
      >
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive } from 'vue'
export default {
  setup() {
    const userInfo = reactive({
      name: '技术',
      desc: '四年前端开发经验，专注前端技术',
      links: [
        {
          logo: require('@/assets/csdn.png'),
          link: 'https://blog.csdn.net/qq_38332693'
        },
        {
          logo: require('@/assets/gitee.png'),
          link: 'https://gitee.com/laqtxy'
        }
      ]
    })

    /** ***************  生命周期  ***************/

    onMounted(() => {})

    /** ***************  自定义方法  ***************/
    const hrefClick = (url: string) => {
      window.open(url)
    }

    return { userInfo, hrefClick }
  }
}
</script>
<style lang="scss" scoped>
.info-container {
  height: 200px;
  background: #4dacfa;
  color: white;

  .avatar {
    padding: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .desc {
    font-size: 16px;
    padding-bottom: 20px;
  }

  .link {
    display: flex;
    justify-content: center;
    img {
      margin: 0 20px;
      width: 35px;
      height: 35px;
    }
  }
}
.info-container:hover {
  cursor: pointer;
}
</style>
