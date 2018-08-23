<template>
    <div class="b-job-list">
        <h2>Job list</h2>
        <div class="b-splash b-splash--no-jobs" v-if="!jobs.length">
            <font-awesome-icon icon="grin-beam-sweat" class="b-splash__icon"/>
            <div class="b-splash__text">No jobs found</div>
        </div>
        <div class="b-job-list__element" v-for="job in jobs" :key="job.id">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'JobList',
        data() {
            return {jobs: []}
        }
    }
</script>

<style scoped>
    .b-job-list {
        position: relative;
    }
</style>
