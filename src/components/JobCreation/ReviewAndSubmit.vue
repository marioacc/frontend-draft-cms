<template>
    <div class="b-job-step__submit-and-review">
        <div class="b-job__info">
            <div class="b-job__virtual-portal-name">
                <div><strong>Virtual Portal Name</strong></div>
                <span>{{activeJob.virtualPortalName || "Not defined"}}</span>
            </div>
            <div class="b-job__library-name">
                <div><strong>Library Name</strong></div>
                <span>{{activeJob.libraryName || "Not defined"}}</span>
            </div>
            <div class="b-job__file">
                <div><strong>Uploaded File</strong></div>
                <span>{{activeJob.file ? activeJob.file.name : "Not uploaded"}}</span>
            </div>
            <div class="b-job__mapping-configuration">
                <div class="b-field-mapping" v-for="(mapping, index) in fieldMappings" :key="index">
                    <div class="b-field-mapping__element">
                        <strong>{{index + 1}}) Field name in Excel</strong>
                        <div>{{mapping.fileFieldName || "Not defined"}}</div>
                    </div>
                    <div class="b-field-mapping__element">
                        <strong>Field name in WCM</strong>
                        <div>{{mapping.wcmFieldName || "Not defined"}}</div>
                    </div>
                </div>
            </div>
        </div>
        <button class="b-button b-button--submit" @click="submitJob(activeJob, fieldMappings)">Submit</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'SubmitAndReview',
        computed: {
            ...mapGetters({
                activeJob: 'jobCreation/activeJob',
                fieldMappings: 'jobCreation/fieldMappings'
            })
        },
        methods: {
            ...mapActions({
                submitJob: 'jobCreation/submitJob'
            })
        }
    }
</script>

<style scoped>
    .b-job__info {
        margin-bottom: var(--spacing-md);
    }

    .b-job__virtual-portal-name, .b-job__library-name, .b-job__file {
        margin-bottom: var(--spacing-md);
        margin-right: var(--spacing-lg);
        display: inline-block;
        min-width: 170px;
    }

    .b-field-mapping {
        display: inline-block;
        padding: var(--spacing-sm);
        background-color: #f2f2f2;
        margin-right: var(--spacing-lg);
        margin-top: var(--spacing-md);
        vertical-align: bottom;
    }

    .b-field-mapping__element {
        display: inline-block;
        min-width: 160px;
    }

    .b-field-mapping__element + .b-field-mapping__element {
        margin-left: var(--spacing-md);
    }
</style>
