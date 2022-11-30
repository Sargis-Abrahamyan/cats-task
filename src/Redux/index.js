import { createStore } from "redux";

import { rootReducer } from "./rootReducer/rootReducer";

const store = createStore(rootReducer);
export default store;