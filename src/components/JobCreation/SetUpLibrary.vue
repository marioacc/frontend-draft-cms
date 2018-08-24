<template>
    <div class="b-job-step__library-name">
        <label>
            <strong>Library name</strong>
            <input type="text" class="b-input b-input--text b-input__library-name"
                   @change="addVLibraryName($event.target.value)"/>
        </label>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: 'SetUpLibrary',
        methods: {...mapMutations({addVLibraryName: 'jobCreation/addVLibraryName'})}
    }
</script>

<style scoped>
    .b-input__library-name {
        display: block;
    }
</style>
