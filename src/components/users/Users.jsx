import { Link } from "react-router-dom";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { Box, Button, Pagination, Paper, Popper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useUsersHook from "./usersHook";
import Modal from "../modal/Modal";

const Users = () => {
    const { users, headerCells, totalPages, page, open, anchorEl, modalMode, setModalMode, handleConfirm, handleDelete, handlePageChange } = useUsersHook();

    return (
        <>
            <Button variant="contained" fullWidth sx={{ marginBottom: 2 }} onClick={() => setModalMode("create")}>
                Create user
            </Button>

            <Pagination
                page={page}
                onChange={handlePageChange}
                count={totalPages}
                color="primary"
                showFirstButton
                showLastButton
                hidePrevButton
                hideNextButton
                shape="rounded"
                variant="outlined"
                sx={{ margin: 3 }}
            />

            <Modal modalMode={modalMode} setModalMode={setModalMode} />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {!!headerCells.length &&
                                headerCells.map((item) => {
                                    return (
                                        <TableCell sx={{ fontWeight: 600 }} align={item === "Actions" ? "right" : "left"} key={item}>
                                            {item}
                                        </TableCell>
                                    );
                                })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!!users.length &&
                            users.map((user, index) => {
                                const { avatar, email, first_name, last_name, id } = user;
                                return (
                                    <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {index}
                                        </TableCell>

                                        <TableCell align="left">
                                            <Link to={`user/${id}`}>
                                                <Typography sx={{ width: "80px", height: "80px" }} component="img" src={avatar}></Typography>
                                            </Link>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Link to={`user/${id}`}>{`${first_name} ${last_name}`}</Link>
                                        </TableCell>

                                        <TableCell align="left">{email}</TableCell>

                                        <TableCell align="right">
                                            <Popper id={id} open={open} anchorEl={anchorEl} placement="left-start">
                                                <Box sx={{ border: 1, p: 1, bgcolor: "white", borderRadius: "10px", textAlign: "center" }}>
                                                    <Typography component="h5" variant="h5">
                                                        Confirm deletion
                                                    </Typography>
                                                    <Button
                                                        size="small"
                                                        color="error"
                                                        variant="contained"
                                                        fullWidth
                                                        sx={{ marginBottom: 2 }}
                                                        onClick={() => handleDelete(id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Box>
                                            </Popper>
                                            <DeleteIcon sx={{ cursor: "pointer" }} onClick={(e) => handleConfirm(e)} />
                                            <EditIcon sx={{ cursor: "pointer" }} onClick={() => setModalMode(`edit_${id}`)} />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Users;
