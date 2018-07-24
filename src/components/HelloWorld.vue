<template>
  <div class="hello">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
// import store from '../store/index';
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => {
      console.log(state);
      return state.count;
    },
  }),
  methods: {
    increment() {
      this.$store.commit('increment');
      this.$store.commit('SHOW_LOADING');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
