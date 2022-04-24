import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import useLoading from "./loadingHook";

const Loading = () => {
    const { loading } = useLoading();

    if (!loading) return <></>;

    return (
        <Typography
            component="div"
            sx={{
                opacity: 0.4,
                zIndex: 999,
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                background: "white",
                textAlign: "center",
                position: "absolute",
                transform: "translate(-50%, -50%)",
            }}
        >
            <LinearProgress />
        </Typography>
    );
};

export default Loading;
