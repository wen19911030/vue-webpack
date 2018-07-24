<template>
<el-container class="app-container"
  :class="{
    'mini-side': isCollapse,
    'hide-side': hideSide
  }"
  >
  <el-aside class="app-side" :width="hideSide ? '0' : sideWidth + 'px'"
    :style="{background: theme.theme.backgroundColor}"
    >
    <div class="app-header-logo-box"
      :style="{height: headerHeight + 'px', color: theme.theme.activeTextColor}"
      >
      <img src="../assets/logo.png" alt="" class="header-logo">
      <span class="header-logo-text" >控制台</span>
    </div>
    <app-side :collapse="isCollapse" :theme="theme.theme"></app-side>
  </el-aside>
  <el-container>
    <el-header class="app-header">
      <app-header @switch="handleSideSwitch" @set-theme="handleSetTheme" @hide-side="handleSwitchHideSide"></app-header>
    </el-header>
    <el-main class="app-body">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script type="text/javascript">
import appSide from './app-side.vue';
import appHeader from './app-header.vue';

export default {
  name: 'app-view',
  data() {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 200,
      footerHeight: 50,
      theme: { theme: {} },
    };
  },
  components: {
    appSide,
    appHeader,
  },
  methods: {
    handleSideSwitch(val) {
      this.isCollapse = val;
      this.sideWidth = val ? 60 : 200;
    },
    handleSwitchHideSide() {
      this.hideSide = !this.hideSide;
    },
    handleSetTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>
<style type="text/css" lang="scss">
.app-container {
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
}
.app-container .app-header {
  padding: 0 15px;
  overflow: visible;
  height: 50px;
  line-height: 50px;
  z-index: 100;
  background: #16aad8;
}
.app-container .app-side {
  width: 200px;
  transition: all 0.5s ease;
}
.app-container .app-body {
  display: flex;
  padding: 0;
  background: #ecf0f5;
}
.app-container .app-footer {
  background: #fff;
  border-top: solid 1px rgba(48, 54, 62, 0.14);
}
.app-container .app-page-body {
  overflow: visible;
}
.app-header-logo-box {
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-header-logo-box .header-logo {
  height: 42px;
  margin-top: -17px;
  margin-right: 5px;
  vertical-align: middle;
}
.app-header-logo-box .header-logo-text {
  font-size: 20px;
  font-weight: bold;
  opacity: 1;
}

/*mini-side*/
.app-container.mini-side .app-side {
  overflow: visible;
}
.app-container.mini-side .app-side .el-menu--collapse {
  width: 60px;
}
.app-container.mini-side .header-logo {
  margin-left: -10px;
}
.app-container.mini-side .header-logo-text {
  opacity: 0;
}
/*hide-side*/
.app-container.hide-side .app-side {
  display: none;
}
</style>
