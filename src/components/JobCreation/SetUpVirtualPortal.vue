<template>
    <div class="b-job-step__virtual-portal">
        <label>
            <strong>Virtual portal name</strong>
            <input type="text" class="b-input b-input--text b-input__virtual-portal-name"
                   @change="addVirtualPortalName($event.target.value)"/>
        </label>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: 'SetUpVirtualPortal',
        methods: {...mapMutations({addVirtualPortalName: 'jobCreation/addVirtualPortalName'})}
    }
</script>

<style scoped>
    .b-input__virtual-portal-name {
        display: block;
    }
</style>
