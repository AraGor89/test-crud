import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api/api";

const useLoginHook = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const token = window.localStorage.getItem("token");

    const handleFormSubmit = async (formData) => {
        const data = await api.post("login", formData);
        const token = await data?.data?.token;

        if (token) {
            localStorage.setItem("token", token);
            navigate(from, { replace: true });
        }
    };

    useEffect(() => {
        if (token) navigate("/");
    }, [token]);

    return { handleFormSubmit };
};

export default useLoginHook;
