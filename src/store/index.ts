import Vue from "vue";
import Vuex from "vuex";
import { createDirectStore } from "direct-vuex";

import counter1 from "./modules/counter";
import counter2 from "./modules/counter";

Vue.use(Vuex);

const { store, rootActionContext, moduleActionContext } = createDirectStore({
  modules: {
    counter1: counter1,
    counter2: counter2,
  },
});

export default store;

export { rootActionContext, moduleActionContext };

export type AppStore = typeof store;

declare module "vuex" {
  interface Store<S> {
    direct: AppStore;
  }
}
