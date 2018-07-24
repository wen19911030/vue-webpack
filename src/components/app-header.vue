<template>
<div class="flex header-container">
  <!-- 切换按钮 -->
  <el-switch v-model="normal"  active-color="#13ce66" inactive-color="#ff4949" @click="handleSwitchSide"></el-switch>
  <ul>
    <li><a href="">用户名</a></li>
    <li>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">主题切换<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>
    <li><a href="">退出</a></li>
  </ul>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'app-header',
  data() {
    return {
      normal: true,
    };
  },
  methods: {
    handleSwitchSide() {
      this.normal = !this.normal;
      this.$emit('switch', !this.normal);
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.header-container {
  justify-content: space-between;
  .el-switch {
    margin-top: 15px;
  }
  ul {
    color: #fff;
    li {
      float: left;
      a {
        color: #fff;
      }
      & + li {
        margin-left: 15px;
      }
    }
  }
  .el-dropdown {
    color: #fff;
  }
}
</style>
