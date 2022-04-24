import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

const useUserHook = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    const getUser = async () => {
        const data = await api.get(`/users/${id}`);
        const user = data.data.data;

        setUser(user);
    };

    useEffect(() => {
        if (id) getUser();
    }, [id]);

    return { user };
};

export default useUserHook;
