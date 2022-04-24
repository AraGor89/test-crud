import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import User from "./components/user/User";
import Users from "./components/users/Users";
import Login from "./components/login/Login";
import Loading from "./components/loading/Loading";
import SnackBar from "./components/snack-bar/SnackBar";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
    return (
        <Typography component="div">
            <Loading />
            <SnackBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Users />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="user/:id"
                    element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Typography component="div">PAGE NOT FOUND</Typography>} />
            </Routes>
        </Typography>
    );
}

export default App;
