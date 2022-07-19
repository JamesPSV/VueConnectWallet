import { reactive, computed, watch } from "vue";
import connectMetamask from "./connectMetamask";

const STATE_NAME = "userState";

const defaultState = {
  address: "",
  signer: null,
  status: false,
};

const getDefaultState = () => {
  if (localStorage.getItem(STATE_NAME) !== null) {
    return JSON.parse(localStorage.getItem(STATE_NAME));
  }

  return defaultState;
};

const state = reactive(getDefaultState());

const getters = {
  getStatus: () => {
    return computed(() => state.status);
  },
};

const actions = {
    connectMetamask
};

watch(
  () => state,
  () => {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  },
  { deep: true }
);

export default () => {
  if (localStorage.getItem(STATE_NAME) === null) {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  }

  return {
    state,
    ...getters,
    ...actions,
  };
};