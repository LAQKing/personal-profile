<template>
  <div class="top-tool">
    <span>{{ title }}</span>
    <div class="more">
      <img src="@/assets/arrow_normal.png">
      <img src="@/assets/arrow_active.png">
    </div>
  </div>
</template>
<script lang="ts">
// import { onMounted } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.top-tool {
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #101010;
    font-size: 20px;
  }

  .more {
    position: relative;
    width: 95px;
    height: 20px;
    line-height: 20px;
    border-radius: 40px;
    border: 1px solid rgba(233, 233, 233, 100);
    padding: 5px 0;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 20px;
    }
    img:last-child {
      opacity: 0;
    }
  }
  .more:hover {
    cursor: pointer;
    background: #4dacfa;
    img:first-child {
      opacity: 0;
    }
    img:last-child {
      opacity: 1;
    }
  }
}
</style>
