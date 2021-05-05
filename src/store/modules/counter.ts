export interface counterState {
  counter: number;
}
export default {
  namespaced: true as true,
  state: () => ({
    counter: 0,
  }),
  getters: {
    total: (state: counterState) => state.counter,
  },
  mutations: {
    RESET_COUNTER(state: counterState, overwrite: number) {
      state.counter = overwrite;
    },
    INCREASE_COUNTER(state: counterState) {
      state.counter += 1;
    },
    DECREASE_COUNTER(state: counterState) {
      state.counter -= 1;
    },
  },
  actions: {
    increase({ commit }: { commit: any }) {
      commit("INCREASE_COUNTER");
    },
    decrease({ commit }: { commit: any }) {
      commit("DECREASE_COUNTER");
    },
    reset({ commit }: { commit: any }, payload: { value: number }) {
      commit("RESET_COUNTER", payload.value);
    },
  },
};
