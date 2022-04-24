import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import useCreateEdit from "./createEditHook";

const CreateEdit = ({ modalMode, handleCloseModal }) => {
    const { isCreatingMode, handleFormSubmit } = useCreateEdit(modalMode, handleCloseModal);

    // NOTE: I am not updating users table because there is no "job" and "name" fields in there.
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: isCreatingMode ? "" : "John",
            job: isCreatingMode ? "" : "killer",
        },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
                required
                autoFocus
                fullWidth
                id="name"
                name="name"
                margin="normal"
                autoComplete="name"
                label="Name"
                {...register("name", { required: true })}
                error={!!errors.name}
                helperText={!!errors.name && "Name is required"}
            />
            <TextField
                required
                fullWidth
                id="job"
                margin="normal"
                type="job"
                name="job"
                label="Job"
                autoComplete="current-job"
                {...register("job", { required: true })}
                error={!!errors.job}
                helperText={!!errors.job && "Job is required"}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {isCreatingMode ? "Create" : "Edit"}
            </Button>
        </Box>
    );
};

export default CreateEdit;
