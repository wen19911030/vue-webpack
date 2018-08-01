<template>

<div class="nav-container">
  <el-menu router default-active="/" :collapse="collapse" :background-color="theme.backgroundColor" :text-color="theme.textColor" :active-text-color="theme.activeTextColor"
      @open="handleOpen" @close="handleClose">
      <el-menu-item index="/">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="/test1">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">测试页1</span>
      </el-menu-item>
      <el-menu-item index="/test2">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">测试页2</span>
      </el-menu-item>
    </el-menu>
</div>


</template>
<script type="text/javascript">
export default {
  props: {
    collapse: Boolean,
    theme: Object,
  },
  components: {},
  data() {
    return {
      defaultActive: 'home',
      test: 'asdfasdf',
    };
  },
  watch: {
    $route() {
      this.setCurrentRoute();
    },
  },
  methods: {
    setCurrentRoute() {
      // console.log(this.$route)
      this.defaultActive = this.$route.name;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.setCurrentRoute();
  },
};
</script>
<style type="text/css">
.nav-container {
  text-align: left;
}
.el-menu {
  border-right: none;
}
.el-menu.side-menu {
  border-right: none;
}
.el-menu .fa {
  font-size: 18px;
  margin-right: 7px;
  display: inline-block;
  width: 23px;
  text-align: center;
}
.el-menu.side-menu .el-menu-item.is-active {
  color: #409eff;
  border-right: solid 2px #36c1fa;
  background: #eef3f5;
}
</style>
