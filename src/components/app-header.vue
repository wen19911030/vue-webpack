<template>
<div class="flex header-container">
  <!-- 切换按钮 -->
  <el-switch v-model="normal" active-color="#13ce66" inactive-color="#ff4949" @change="handleSwitchSide"></el-switch>
  <ul>
    <li><a href="">用户名</a></li>
    <li>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">主题切换<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in theme" :key="index" :command="item.name">{{item.label}}</el-dropdown-item>
          <!-- <el-dropdown-item>黄金糕</el-dropdown-item> -->
          <!-- <el-dropdown-item>狮子头</el-dropdown-item> -->
          <!-- <el-dropdown-item>螺蛳粉</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </li>
    <li><a href="">退出</a></li>
  </ul>
</div>
</template>
<script>
import theme from '../theme';
export default {
  name: 'app-header',
  data() {
    return {
      normal: true,
      theme: {},
    };
  },
  methods: {
    handleSwitchSide() {
      this.$emit('switch', !this.normal);
    },
    handleCommand(command) {
      console.log(command);
      const curTheme = theme.filter(item => item.name === command);
      if (curTheme.length && curTheme[0].theme) {
        this.$store.commit('CHANGE_THEME', curTheme[0].theme);
      }
    },
  },
  created() {
    this.theme = theme;
  },
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
