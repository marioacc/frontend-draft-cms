<template>
    <div class="b-job-creation">
        <job-steps :steps="steps"></job-steps>
        <set-up-virtual-portal v-show="activeStep.id === stepNames.SET_UP_VIRTUAL_PORTAL"></set-up-virtual-portal>
        <set-up-library v-show="activeStep.id === stepNames.SET_UP_LIBRARY"></set-up-library>
        <upload-file-for-job v-show="activeStep.id === stepNames.UPLOAD_FILE"></upload-file-for-job>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import JobSteps from "../JobSteps/JobSteps";
    import SetUpVirtualPortal from "./SetUpVirtualPortal";
    import SetUpLibrary from "./SetUpLibrary";
    import UploadFileForJob from "./UploadFileForJob";

    import {
        SET_UP_VIRTUAL_PORTAL,
        SET_UP_LIBRARY,
        UPLOAD_FILE,
        SET_MAPPING_CONFIGURATION,
        DO_FINAL_REVIEW,
        SUBMIT_ACTION,
        GET_RESULTS
    } from './../../store/modules/job-creation';

    export default {
        components: {
            UploadFileForJob,
            JobSteps,
            SetUpVirtualPortal,
            SetUpLibrary
        },
        name: 'JobCreation',
        data() {
            return {
                stepNames: {
                    SET_UP_VIRTUAL_PORTAL,
                    SET_UP_LIBRARY,
                    SET_MAPPING_CONFIGURATION,
                    UPLOAD_FILE,
                    DO_FINAL_REVIEW,
                    SUBMIT_ACTION,
                    GET_RESULTS
                }
            }
        },
        computed: {
            ...mapGetters({steps: 'jobCreation/steps', activeStep: 'jobCreation/activeStep'})
        }
    }
</script>

<style scoped>

</style>
