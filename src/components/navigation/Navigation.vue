<template>
  <div class="b-navigation">
    <ul class="b-navigation__list">
      <router-link v-for="item in navigationItems" tag="li" :to="item.path" :key="item.id"
                   class="b-navigation__item">
        <a class="b-navigation__anchor">{{item.name}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import {mainNavigationRoutes} from './../../router/index';

  export default {
    name: 'Navigation',
    data() {
      return {
        navigationItems:
        mainNavigationRoutes

      }
    }
  }
</script>

<style scoped>
  .b-navigation {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .b-navigation .b-navigation__list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .b-navigation__item {
    user-select: none;
    height: 30px;
    display: inline-block;
    cursor: pointer;
    margin: 0 var(--spacing-md);
  }

  .b-navigation__item:first-child {
    margin-left: var(--spacing-sm);
  }

  .b-navigation__anchor {
    vertical-align: bottom;
    display: inline-block;
    padding: var(--spacing-sm);
    color: var(--header-font-color);
    text-decoration: none;
    border-bottom: 5px solid transparent;
    transition: border-bottom 0.25s ease-in-out;
  }

  .b-navigation__anchor:hover {
    border-bottom: 5px solid #00C1B5;
  }

  .b-navigation__item.router-link-active .b-navigation__anchor {
    border-bottom: 5px solid #00C1B5;
  }
</style>
