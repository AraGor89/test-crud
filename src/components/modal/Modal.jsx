import { Typography, Modal as MaterialModal } from "@mui/material";
import { Box } from "@mui/system";
import CreateEdit from "../create-edit/CreateEdit";
import useModal from "./modalHook";

const Modal = ({ modalMode, setModalMode }) => {
    const { open, handleClose } = useModal(modalMode, setModalMode);

    return (
        <Typography component="div">
            <MaterialModal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        top: "50%",
                        left: "50%",
                        width: 572,
                        padding: "23px",
                        position: "absolute",
                        borderRadius: "14px",
                        background: "#FFFFFF",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <CreateEdit modalMode={modalMode} handleCloseModal={handleClose} />
                </Box>
            </MaterialModal>
        </Typography>
    );
};

export default Modal;
