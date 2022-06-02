<template>
  <div class="about-container w1200">
    <!-- 个人简介 -->
    <div class="introduction-container">
      <div class="left">{{ "个人\n简介" }}</div>
      <div class="right">
        <span>4年开发经验 | 26岁 </span>
        <div class="contact">
          <span>联系方式：</span>
          <a style="margin-right: 20px" href="tencent://message/?uin=1563058139&Site=qq&Menu=yes"><img src="@/assets/QQ.png"></a>
          <el-popover placement="bottom" :width="200" trigger="hover">
            <template #reference>
              <img src="@/assets/wechat.png" @click="showWechat">
            </template>
            <div style="text-align: center">
              <img
                style="width: 150px; height: 150px"
                src="@/assets/wechat_code.png"
              >
            </div>
          </el-popover>
        </div>
        <span>联系邮箱：1563058139@qq.com</span>
      </div>
    </div>
    <!-- 专业技能 -->
    <top-tool :show-tag="true" :show-more="false" title="专业技能" @more="more" />
    <div class="major-container">
      <div v-for="item in majorList" :key="item.title" class="major-item">
        <div class="title">{{ item.title }}:</div>
        <div v-for="(major, index) in item.items" :key="index" class="major">
          <div />
          <span>{{ major }}</span>
        </div>
      </div>
    </div>
    <!-- 工作经历 -->
    <top-tool :show-tag="true" :show-more="false" title="工作经历" @more="more" />
    <div v-for="item in dataList" :key="item.name" class="job-container">
      <div class="tech-item">
        <div class="logo"><img :src="require('@/assets/logo.png')" alt=""></div>
        <div class="company">{{ item.name }}</div>
        <div class="more">
          <div>
            <div class="station time">{{ item.station }}</div>
            <div class="time">{{ item.date }}</div>
          </div>
        </div>
      </div>
      <div class="arrow-container">
        <img src="@/assets/arrow_active.png">
      </div>
      <div class="project-container">
        <div v-for="project in item.projects" :key="project.title" class="case-item" @click="showDetail(project)">
          <div class="desc">
            {{ project.introduce }}
          </div>
          <div class="info">
            <div>
              <div class="title">{{ project.title }}</div>
              <div class="type" style="font-size: 12px">{{ project.type }}</div>
            </div>
            <div class="arrow-container">
              <img src="@/assets/arrow_active.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import TopTool from '@/components/TopTool.vue' // @ is an alias to /src
import { useRouter } from 'vue-router'
import { getUserInfo } from '@/api/services'

export default {
  components: {
    TopTool
  },
  setup(prop: any, context: any) {
    /** ***************  数据声明  ***************/
    const router = useRouter()
    const state = reactive<any>({
      dataList: [],
      majorList: []
    })
    const more = () => {
      context.emit('more')
    }
    // 请求数据
    const getData = () => {
      getUserInfo().then((res:any) => {
        state.dataList = res.data.dataList
        state.majorList = res.data.majorList
      })
    }
    /** ***************  自定义方法  ***************/
    const showDetail = (item: any) => {
      window.scrollTo(0, 0)
      const id = item.icon
      router.push({
        name: 'CaseDetail',
        params: {
          id: id
        }
      })
    }
    onMounted(() => {
      getData()
    })
    return {
      ...toRefs(state),
      showDetail,
      more
    }
  }
}
</script>
<style lang="scss" scoped>
.about-container {
  padding: 50px 0;
}

.introduction-container {
  color: #4dacfa;
  font-size: 80px;
  text-align: left;
  display: flex;
  box-shadow: 0px 5px 15px 0px rgba(51, 49, 49, 0.12);
  margin-bottom: 50px;
  padding: 30px 0;
  .left {
    padding: 0 50px;
    width: 300px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .right {
    color: black;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .contact {
      img {
        width: 30px;
        height: 30px;
        transform: translateY(25%);
        cursor: pointer;
      }
    }
  }
}

.major-container {
  text-align: left;
  padding: 10px;

  .major-item {
    margin-bottom: 20px;
    .title {
      font-size: 22px;
      font-weight: bold;
    }
    .major {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;

      div {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: black;
        margin-right: 20px;
      }
    }
  }
}

.job-container {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.tech-item {
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(233, 233, 233, 100);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
  .logo {
    margin: 20px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 5px;
    }
  }
  .title {
    padding: 20px 10px;
  }
  .company {
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .more {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 80px;
    background: #e9e9e9;

    .time {
      font-size: 15px;
      color: #4dacfa;
      text-align: left;
    }

    .station {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.arrow-container {
  margin: 0 20px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #4dacfa;
  img {
    width: 20px;
    height: 20px;
    transform: translateY(50%);
  }
}

.project-container {
  display: flex;
  align-items: center;

  .case-item {
    width: 200px;
    height: 240px;
    background: #4dacfa;
    margin-right: 30px;
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.12);
    position: relative;
    cursor: pointer;
    .desc {
      margin: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
    color: white;
    }
    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      background: white;
      text-align: left;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 15px;
        font-weight: bold;
      }

      .type {
        font-size: 12px;
      }

      .arrow-container {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #4dacfa;
        img {
          width: 10px;
          height: 10px;
          transform: translate(50%, 0);
        }
      }
    }
  }
}

.job {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .job-top {
    display: flex;
    text-align: left;
    img {
      width: 60px;
      height: 60px;
      border: 2px solid #4dacfa;
      border-radius: 5px;
    }

    .job-top-right {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 20px;
        font-weight: bold;
      }

      .station {
        font-size: 16px;
        font-weight: bold;
      }

      .time {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
