<template>
    <div id="app">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header/Header';

    import './assets/common/index.css';

    export default {
        name: 'App',
        components: {Header}
    }
</script>

<style>
    :root {
        /* Color variables */
        --header-font-color: #FFFFFF;
        --b22-brand-blue: #0F669D;
        --b22-brand-blue-darker: #0b4b74;
        --b22-dark-blue: #282C37;
        --header-background-color: var(--b22-dark-blue);

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

    a {
        cursor: pointer;
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
</style>
