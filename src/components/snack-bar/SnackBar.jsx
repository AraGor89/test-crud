import { Alert, Snackbar, Typography } from "@mui/material";
import useNotifier from "./snackBarHook";

const SnackBar = () => {
    const { open, notifyMessage, handleClose } = useNotifier();

    if (!notifyMessage) return <></>;

    return (
        <Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} autoHideDuration={3000} onClose={handleClose}>
            <Typography component="div">
                <Alert variant="filled" elevation={6} onClose={handleClose} severity={notifyMessage} style={{ alignItems: "center" }}>
                    <Typography component="h5" variant="h5">
                        {notifyMessage === "success" ? (
                            <> The data was processed successfully</>
                        ) : (
                            <> Oops, something went wrong. Please check your data and try again.</>
                        )}
                    </Typography>
                </Alert>
            </Typography>
        </Snackbar>
    );
};

export default SnackBar;
