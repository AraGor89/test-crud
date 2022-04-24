import axios from "axios";
import { store } from "../store";
import { toggleLoading, setNotifyMessage } from "../store/mainSlice";

export const api = axios.create({
    baseURL: "https://reqres.in/api/",
});

api.interceptors.request.use((req) => {
    const token = window.localStorage.getItem("token");

    req.headers = {
        Authorization: `Bearer ${token}`,
    };

    store.dispatch(toggleLoading(true));

    return req;
});

api.interceptors.response.use(
    (res) => {
        store.dispatch(toggleLoading(false));
        if (res.config.method !== "get") store.dispatch(setNotifyMessage("success"));

        return res;
    },
    (err) => {
        store.dispatch(toggleLoading(false));

        store.dispatch(setNotifyMessage("error"));

        // NOTE: In real cases we should have strict rules for handling errors.
        //       Here i create top level abstraction for handling "success" and "errors"
        console.log(err);
    }
);
