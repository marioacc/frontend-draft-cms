<template>
  <div class="b-header">
    <div class="b-float--left">
      <h1>{{title}}</h1>
    </div>
    <div class="b-float--right">
      <User/>
    </div>
    <div class="b-navigation-wrapper">
      <Navigation/>
    </div>
  </div>
</template>

<script>
  import User from './../user/User';
  import Navigation from './../navigation/Navigation';

  export default {
    name: 'Header',
    components: {User, Navigation},
    data() {
      return {
        title: "Authoring"
      }
    }
  }
</script>

<style scoped>
  .b-header {
    position: relative;
    background-color: var(--header-background-color);
    color: var(--header-font-color);
    height: 200px;
    padding: var(--spacing-md);
  }
</style>
