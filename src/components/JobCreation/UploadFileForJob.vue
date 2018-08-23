<template>
    <div class="b-job-step__upload-file">
        <label>
            Upload Excel file
            <input type="file" class="b-input b-input--text b-input__upload-file"
                   accept=".xls, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                   @change="addFileToJob($event.target.files[0])"/>
        </label>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: 'UploadFileForJob',
        methods: {...mapMutations({addFileToJob: 'jobCreation/addFileToJob'})}
    }
</script>

<style scoped>
    .b-input__upload-file {
        display: block;
    }
</style>
