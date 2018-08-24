<template>
    <div class="b-job-creation">
        <job-steps :steps="steps"/>
        <set-up-virtual-portal v-show="activeStep.id === stepNames.SET_UP_VIRTUAL_PORTAL"/>
        <set-up-library v-show="activeStep.id === stepNames.SET_UP_LIBRARY"/>
        <upload-file-for-job v-show="activeStep.id === stepNames.UPLOAD_FILE"/>
        <configure-mapping v-show="activeStep.id === stepNames.SET_MAPPING_CONFIGURATION"/>
        <submit-and-review v-show="activeStep.id === stepNames.REVIEW_AND_SUBMIT"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import {
        SET_UP_VIRTUAL_PORTAL,
        SET_UP_LIBRARY,
        UPLOAD_FILE,
        SET_MAPPING_CONFIGURATION,
        REVIEW_AND_SUBMIT,
        GET_RESULTS
    } from '../../store/modules/job-creation-steps';

    import JobSteps from "../JobSteps/JobSteps";
    import SetUpVirtualPortal from "./SetUpVirtualPortal";
    import SetUpLibrary from "./SetUpLibrary";
    import UploadFileForJob from "./UploadFileForJob";
    import ConfigureMapping from "./ConfigureMapping";
    import SubmitAndReview from "./ReviewAndSubmit";

    export default {
        components: {
            SubmitAndReview,
            ConfigureMapping,
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
                    REVIEW_AND_SUBMIT,
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
