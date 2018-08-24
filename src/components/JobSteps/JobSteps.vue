<template>
    <div class="b-job-steps">
        <div class="b-job-steps__element" v-for="step in steps" :key="step.id" :class="{active: step.active}"
             @click="setActiveStep(step.id)">
            <a class="b-job-steps__anchor" href="#" onclick="return false">{{step.name}}
                <div class="b-job-step__status" :class="{complete: step.isComplete}">
                    {{step.isComplete ? " Complete" : "Incomplete"}}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: 'JobSteps',
        props: ['steps'],
        methods: {
            ...mapMutations({setActiveStep: 'jobCreation/setActiveStep'})
        },
        created() {
            this.$store.commit('jobCreation/setActiveStep', this.steps[0].id);
        }
    }
</script>

<style scoped>
    .b-job-steps {
        margin-bottom: var(--spacing-md);
    }

    .b-job-steps__element {
        display: inline-block;
        padding: var(--spacing-xs);
        margin-right: var(--spacing-md);
        opacity: 0.3;
        text-align: center;
        min-width: 120px;
        border-bottom: 1px solid transparent;
        text-decoration: none;
    }

    .b-job-steps__element.active {
        opacity: 1;
        border-bottom: 1px solid var(--b22-brand-blue);
    }

    .b-job-steps__element .b-job-step__status {
        color: red;
    }

    .b-job-steps__element .b-job-step__status.complete {
        color: green;
    }

    .b-job-steps__element:hover {
        opacity: 1;
    }

    .b-job-steps__anchor {
        text-decoration: none;
        color: inherit;
    }
</style>
