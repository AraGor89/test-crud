import { useEffect, useState } from "react";
import { api } from "../../api/api";

const useUsersHook = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalMode, setModalMode] = useState("");

    const open = Boolean(anchorEl);

    useEffect(() => {
        getUsers();
    }, [page]);

    const headerCells = ["Index", "Avatar", "Full name", "Email", "Actions"];

    const getUsers = async () => {
        const data = await api.get(`/users?page=${page}`);
        const users = data.data.data;
        const total = data.data.total_pages;

        setUsers(users);
        setTotalPages(total);
    };

    const handlePageChange = (_, page) => {
        setPage(page);
    };

    const handleConfirm = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleDelete = async (id) => {
        setAnchorEl(null);
        const data = await api.delete(`/users/${id}`);
    };

    const handleEdit = () => {};

    return { users, headerCells, totalPages, page, open, anchorEl, modalMode, setModalMode, handleEdit, handleDelete, handleConfirm, handlePageChange };
};

export default useUsersHook;
