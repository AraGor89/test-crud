import { api } from "../../api/api";

const useCreateEdit = (modalMode, handleCloseModal) => {
    const isCreatingMode = modalMode === "create";

    const handleFormSubmit = (data) => {
        if (modalMode.includes("edit")) {
            // NOTE: In real cases we should first do API call for getting existing data
            //       which we are about to EDIT. But this API does not return the needed fields ({name, job}) in users list.
            const index = modalMode.indexOf("_");
            const id = modalMode.substring(index + 1);

            editUser(id, data);
        }
        if (isCreatingMode) createUser(data);

        handleCloseModal();
    };

    const createUser = async (formData) => {
        const data = await api.post("users", formData);
        // NOTE: After response was successful we need to update our "users list state" or make another call to get updated users list again.
    };

    const editUser = async (id, formData) => {
        const data = await api.put(`users/${id}`, formData);
        // NOTE: After response was successful we need to update our "users list state" or make another call to get updated users list again.
    };

    return { isCreatingMode, handleFormSubmit };
};

export default useCreateEdit;
