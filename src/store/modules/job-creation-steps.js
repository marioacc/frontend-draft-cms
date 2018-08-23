// initial state
export const SET_UP_VIRTUAL_PORTAL = "SET_UP_VIRTUAL_PORTAL";
export const SET_UP_LIBRARY = "SET_UP_LIBRARY";
export const SET_MAPPING_CONFIGURATION = "SET_MAPPING_CONFIGURATION";
export const UPLOAD_FILE = "UPLOAD_FILE";
export const DO_FINAL_REVIEW = "DO_FINAL_REVIEW";
export const SUBMIT_ACTION = "SUBMIT_ACTION";
export const GET_RESULTS = "GET_RESULTS";

const state = {
    activeJob: {},
    fieldMappings: [{fileFieldName: "", wcmFieldName: ""}],
    activeStep: undefined,
    steps: [
        {id: SET_UP_VIRTUAL_PORTAL, name: "Set up virtual portal", isComplete: false},
        {id: SET_UP_LIBRARY, name: "Set up library", isComplete: false},
        {id: UPLOAD_FILE, name: "Upload file", isComplete: false},
        {id: SET_MAPPING_CONFIGURATION, name: "Mapping configuration", isComplete: false},
        {id: DO_FINAL_REVIEW, name: "Do final review", isComplete: false},
        {id: SUBMIT_ACTION, name: "Submit action", isComplete: false},
        {id: GET_RESULTS, name: "Get results", isComplete: false}
    ]
};

// getters
const getters = {
    steps: state => state.steps,
    activeStep: state => state.steps.find(step => step.active) || state.steps[0],
    activeJob: state => state.activeJob,
    fieldMappings: state => state.fieldMappings
};

// actions
const actions = {};

// mutations
const mutations = {
    setActiveStep(state, id) {
        state.steps = state.steps.map(step => {
            step.active = step.id === id;
            return step;
        });
    },
    addVirtualPortalName(state, name = "") {
        state.activeJob.virtualPortalName = name;
        let index = state.steps.findIndex(step => step.id === SET_UP_VIRTUAL_PORTAL);
        state.steps[index].isComplete = !!name.length;
    },
    addVLibraryName(state, name = "") {
        state.activeJob.libraryName = name;
        let index = state.steps.findIndex(step => step.id === SET_UP_LIBRARY);
        state.steps[index].isComplete = !!name.length;
    },
    addFileToJob(state, file) {
        state.activeJob.file = file;
        let index = state.steps.findIndex(step => step.id === UPLOAD_FILE);
        state.steps[index].isComplete = !!file;
    },
    addFieldMapping(state, {index, propertyName, value}) {
        state.fieldMappings[index][propertyName] = value;


        // let index = state.steps.findIndex(step => step.id === UPLOAD_FILE);
        // state.steps[index].isComplete = !!value;
    },
    addEmptyFieldMapping(state) {
        state.fieldMappings.push({fileFieldName: "", wcmFieldName: ""});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}