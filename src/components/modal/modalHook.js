import { useEffect, useState } from "react";

const useModal = (modalMode, setModalMode) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setModalMode("");
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (modalMode) handleOpen();
    }, [modalMode]);

    return { open, handleClose };
};

export default useModal;
