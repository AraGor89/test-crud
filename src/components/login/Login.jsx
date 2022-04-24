import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useLoginHook from "./loginHook";

const Login = () => {
    const { handleFormSubmit } = useLoginHook();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        id="email"
                        name="email"
                        margin="normal"
                        autoComplete="email"
                        label="Email Address"
                        {...register("email", { required: true })}
                        error={!!errors.email}
                        helperText={!!errors.email && "Email is required"}
                    />
                    <TextField
                        required
                        fullWidth
                        id="password"
                        margin="normal"
                        type="password"
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        {...register("password", { required: true })}
                        error={!!errors.password}
                        helperText={!!errors.password && "Password is required"}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Log In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
