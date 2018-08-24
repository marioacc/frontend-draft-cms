// initial state
export const SET_UP_VIRTUAL_PORTAL = "SET_UP_VIRTUAL_PORTAL";
export const SET_UP_LIBRARY = "SET_UP_LIBRARY";
export const SET_MAPPING_CONFIGURATION = "SET_MAPPING_CONFIGURATION";
export const UPLOAD_FILE = "UPLOAD_FILE";
export const REVIEW_AND_SUBMIT = "REVIEW_AND_SUBMIT";
export const GET_RESULTS = "GET_RESULTS";

const state = {
    activeJob: {},
    fieldMappings: [{fileFieldName: "", wcmFieldName: ""}],
    steps: [
        {id: SET_UP_VIRTUAL_PORTAL, name: "Set up virtual portal", isComplete: false},
        {id: SET_UP_LIBRARY, name: "Set up library", isComplete: false},
        {id: UPLOAD_FILE, name: "Upload file", isComplete: false},
        {id: SET_MAPPING_CONFIGURATION, name: "Configure mapping", isComplete: false},
        {id: REVIEW_AND_SUBMIT, name: "Review and Submit", isComplete: false},
        {id: GET_RESULTS, name: "Get results", isComplete: false}
    ],
    activeStep: undefined
};

// getters
const getters = {
    steps: state => state.steps,
    activeStep: state => state.steps.find(step => step.active) || state.steps[0],
    activeJob: state => state.activeJob,
    fieldMappings: state => state.fieldMappings
};

// actions
const actions = {
    submitJob({commit}, job, fieldMappings) {
        let formData = new FormData();
        formData.append("virtualPortalName", job.virtualPortalName);
        formData.append("libraryName", job.libraryName);
        formData.append("file", job.file);
        formData.append("fieldMappings", fieldMappings);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/wcm-api-tools/categories");
        xhr.send(formData);
    }
};

// mutations
const mutations = {
    setActiveStep(state, id) {
        state.steps = state.steps.map(step => {
            step.active = step.id === id;
            return step;
        });
    },
    addVirtualPortalName(state, name = "") {
        state.activeJob = Object.assign({}, state.activeJob, {virtualPortalName: name});
        state.steps = state.steps.map(step => Object.assign({}, step, {isComplete: step.id === SET_UP_VIRTUAL_PORTAL ? !!name.length : step.isComplete}));
    },
    addVLibraryName(state, name = "") {
        state.activeJob = Object.assign({}, state.activeJob, {libraryName: name});
        state.steps = state.steps.map(step => Object.assign({}, step, {isComplete: step.id === SET_UP_LIBRARY ? !!name.length : step.isComplete}));
    },
    addFileToJob(state, file) {
        state.activeJob = Object.assign({}, state.activeJob, {file});
        state.steps = state.steps.map(step => Object.assign({}, step, {isComplete: step.id === UPLOAD_FILE ? !!file : step.isComplete}));
    },
    addFieldMapping(state, {index, propertyName, value}) {
        state.fieldMappings[index][propertyName] = value;
        let isAtLeastOneFieldMappingComplete = !!state.fieldMappings.find(mapping => mapping.fileFieldName && mapping.wcmFieldName);
        state.steps = state.steps.map(step => Object.assign({}, step, {isComplete: step.id === SET_MAPPING_CONFIGURATION ? !!value && isAtLeastOneFieldMappingComplete : step.isComplete}));
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