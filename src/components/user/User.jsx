import { Grid, Typography } from "@mui/material";
import useUserHook from "./userHook";

const User = () => {
    const { user } = useUserHook();
    const { avatar, email, first_name, last_name, id } = user;

    if (!Object.keys(user).length) return <></>;

    return (
        <Grid
            container
            component="div"
            sx={{
                top: "25%",
                left: "50%",
                width: 572,
                height: 200,
                padding: "23px",
                position: "absolute",
                borderRadius: "14px",
                background: "#605a66",
                color: "white",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Grid item xs={3}>
                <Typography component="img" src={avatar} />
            </Grid>
            <Grid item xs={8} marginLeft={2}>
                <Typography component="div">ID: {id}</Typography>
                <Typography component="div">email: {email}</Typography>
                <Typography component="div">first name: {first_name}</Typography>
                <Typography component="div">last name: {last_name}</Typography>
            </Grid>
        </Grid>
    );
};

export default User;
