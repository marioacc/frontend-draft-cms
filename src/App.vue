<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header';

  export default {
    name: 'App',
    components: {Header}
  }
</script>

<style>
  :root {
    /* Color variables */
    --header-background-color: #002139;
    --header-font-color: #FFFFFF;

    /* Space variables */
    --spacing-xs: 5px;
    --spacing-sm: 10px;
    --spacing-md: 20px;
    --spacing-lg: 30px;
    --spacing-xl: 40px;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    margin: 0;
    font-weight: normal;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  .padding-all-md {
    padding: var(--spacing-md);
  }

  .b-float--left {
    float: left;
  }

  .b-float--right {
    float: right;
  }

  .b-image {
    width: 100%;
  }

  .b-user .b-user__image {
    display: inline-block;
  }

  .b-user .b-user__name {
    display: inline-block;
  }
</style>
