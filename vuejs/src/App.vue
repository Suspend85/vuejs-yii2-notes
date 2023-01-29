<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<!--<script>-->

<!--import Notes from './components/Notes';-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: { Notes },-->
<!--};-->
<!--</script>-->

<style lang="scss">
  html,
  body,
  #app{
    padding: 0;
    margin: 0;
    height: 100%;
  }
  *{
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  #app{
    font-family: 'Roboto', sans-serif;
    background-color: #ececec;
  }
</style>
