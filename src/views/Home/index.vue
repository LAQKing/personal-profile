<template>
  <div>
    <div class="top">
      <div class="home" />
      <img class="home_bg" src="@/assets/home_bg.png">
      <div class="home_text">
        <div>枯木逢春犹再发</div>
        <div>人无两度再少年</div>
        <div>书山有路勤为径</div>
        <div>学海无涯苦作舟</div>
      </div>
    </div>
    <Project class="case-container " :data="projectList" @more="moreCase" />
    <Technology class="case-container " :data="technologys" @more="moreTech" />
  </div>

</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs } from 'vue'
import Project from './components/project.vue'
import Technology from './components/Technology.vue'
import { useRouter } from 'vue-router'
import { getProject, getBlog } from '@/api/services'
const router = useRouter()
/** 数据 */
const state = reactive<any>({
  projectList: [],
  technologys: []
})
// 案例
const cases = () => {
  getProject().then((res: any) => {
    state.projectList = res.data.result.slice(0, 3)
  })
}

// 技术
const techs = () => {
  getBlog().then((res: any) => {
    state.technologys = res.data.result.slice(0, 3)
  })
}
onMounted(() => {
  cases()
  techs()
})

const moreCase = () => {
  window.scrollTo(0, 0)
  router.push('project')
}

const moreTech = () => {
  window.scrollTo(0, 0)
  router.push('technology')
}
const {
  projectList,
  technologys
} = toRefs(state)
</script>
<style lang="scss" scoped>
.top {
  position: relative;
  background: #4dacfa;
}

.home_bg {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
}

.home_text {
  position: absolute;
  left: 100px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 30px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;

  div {
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }

    &:nth-child(2) {
      margin-left: 70px;
    }

    &:nth-child(3) {
      margin-left: 140px;
    }

    &:last-child {
      margin-left: 210px;
    }
  }
}

.home {
  // height: 550px;
  width: 60%;
  background: #4dacfa;
  border-bottom: 550px solid #39424f;
  border-right: 550px solid #4dacfa;
  // border-bottom: 50px solid green;
}

.case-container {
  padding-top: 50px;
}

@media screen and (max-width:1400px) {
  .home_text {
    left: 50px;
    font-size: 24px;
    div {

      &:nth-child(2) {
        margin-left: 50px;
      }

      &:nth-child(3) {
        margin-left: 100px;
      }

      &:last-child {
        margin-left: 150px;
      }
    }
  }
  .home_bg{
    right: 50px;
    max-width: 50%;
  }
}
@media screen and (max-width:768px) {
  .home{
    border-bottom: 450px solid #39424f;
    border-right: 450px solid #4dacfa;
  }
  .home_text {
    left: 20px;
    font-size: 20px;
    top: 65%;
    div {

      &:nth-child(2) {
        margin-left: 30px;
      }

      &:nth-child(3) {
        margin-left: 60px;
      }

      &:last-child {
        margin-left: 90px;
      }
    }
  }
  .home_bg{
    right: 20px;
    top: 20%;
  }
}
</style>
