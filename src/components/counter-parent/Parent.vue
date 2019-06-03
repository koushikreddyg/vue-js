<script>
import Child from "../counter-child/Child.vue";
import mixins from "./helper.js";

const data = [
  {
    name: "koushik",
    age: 20
  },
  {
    name: "Arun",
    age: 26
  }
];

export default {
  name: "Parent",
  mixins: [mixins],
  components: { Child },
  data() {
    return {
      count: 0,
      inputValue: "ronaldo",
      data,
      color: "red",
      apiResponse: []
    };
  },
  methods: {
    onCountChange(value) {
      this.count = this.count + value;
    },
    onInputChange(e) {
      this.inputValue = e.target.value;
    },
    renderName() {
      return "koushik Reddy";
    },
    navigate() {
      this.$router.push("/");
    },
    getPosts(url) {
      this.get(url)
        .then(res => {
          this.apiResponse = res;
        })
        .catch(res => {
          this.apiResponse = [];
        });
    }
  },
  mounted() {
    // this.getPosts("https://jsonplaceholder.typicode.com/todos");
  },
  updated() {},
  watch: {
    count() {
      console.log("count has been changed");
    }
  }
};
</script>

<template src="./Parent.html"></template>

<style src="./styles.css" scoped>
</style>






