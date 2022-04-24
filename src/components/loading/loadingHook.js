import { useSelector } from "react-redux";

const useLoading = () => {
    const loading = useSelector((state) => state?.mainReducer.loading);

    return { loading };
};

export default useLoading;
