import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; //import authReducer
import jobReducer from "./jobSlice"; //import jobReducer
import companyReducer from "./companySlice"; //import companyReducer
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; //default storage is local storage
import { persistStore } from "redux-persist";

const persistConfig = {
    key: "root", //key under which data will be stored in local storage
    version: 1,
    storage,
    //why these?
    //FLUSH: when we dispatch an action, it flushes the state to storage
    //REHYDRATE: when we refresh the page, it rehydrates the state from storage
    //PAUSE: when we pause the app, it pauses the state to storage
    //PERSIST: when we persist the app, it persists the state to storage
    //PURGE: when we purge the app, it purges the state from storage
    //REGISTER: when we register the app, it registers the state to storage
};

//wrap the reducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedJobReducer = persistReducer(persistConfig, jobReducer);
const persistedCompanyReducer = persistReducer(persistConfig, companyReducer);

const store = configureStore({
    reducer: {
        //we pass slices here(umm means diff diff fields.. like user, job etc)
        
        auth: persistedAuthReducer, //pass authReducer
        job: persistedJobReducer, //pass jobReducer
        company: persistedCompanyReducer, //pass companyReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
