<template>
    <div class="b-job-step__upload-file">
        <label>
            Upload Excel file
            <input type="file" class="b-input b-input--text b-input__upload-file"/>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'UploadFileForJob'
    }
</script>

<style scoped>
    .b-input__upload-file {
        display: block;
    }
</style>
