import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifyMessage } from "../../store/mainSlice";

const useNotifier = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const notifyMessage = useSelector((state) => state.mainReducer.notifyMessage);

    useEffect(() => {
        if (notifyMessage) setOpen(true);
    }, [notifyMessage]);

    const handleClose = (_, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
        dispatch(setNotifyMessage(undefined));
    };

    return { open, notifyMessage, handleClose };
};

export default useNotifier;
