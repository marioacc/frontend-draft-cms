<template>
    <section class="b-section padding-all-md">
        <button class="b-button b-button--add b-button-add-job" @click="isJobCreationActive = true">Add job</button>
        <div class="b-job-actions-wrapper">
            <job-creation v-if="isJobCreationActive"></job-creation>
        </div>
        <job-list></job-list>
    </section>
</template>

<script>
    import JobList from "../JobList/JobList";
    import JobCreation from "../JobCreation/JobCreation";

    export default {
        components: {
            JobCreation,
            JobList
        },
        name: 'JobManagement',
        data() {
            return {isJobCreationActive: false}
        }
    }
</script>

<style scoped>
    .b-job-actions-wrapper {
        border: 1px dashed var(--b22-dark-blue);
        padding: var(--spacing-md);
        min-height: 350px;
        margin-bottom: var(--spacing-md);
    }

    .b-button-add-job {
        margin-bottom: var(--spacing-md);
    }
</style>
