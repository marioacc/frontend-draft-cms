<template>
    <div class="b-job-step__configure-mapping">
        <div class="b-field-mapping" v-for="(mapping, index) in fieldMappings" :key="index">
            <label>
                {{index + 1}}) Field name in Excel
                <input type="text" class="b-input b-input--text b-input__configure-mapping"
                       @change="addFieldMapping({index, propertyName: 'fileFieldName', value: $event.target.value})"/>
            </label>
            <label>
                Field name in WCM
                <input type="text" class="b-input b-input--text b-input__configure-mapping"
                       @change="addFieldMapping({index, propertyName: 'wcmFieldName', value: $event.target.value})"/>
            </label>
        </div>
        <a @click="addEmptyFieldMapping">Add field</a>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: 'ConfigureMapping',
        computed: {...mapGetters({fieldMappings: 'jobCreation/fieldMappings'})},
        methods: {
            ...mapMutations({
                addFieldMapping: 'jobCreation/addFieldMapping',
                addEmptyFieldMapping: 'jobCreation/addEmptyFieldMapping'
            })
        }
    }
</script>

<style scoped>
    .b-input__configure-mapping {
        display: block;
    }

    label + label {
        margin-left: var(--spacing-md);
    }
</style>
