import { Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import { NewUserModal } from "./newUserModal/NewUserModal";
import { UsersList } from "./UsersList/UsersList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { User as UserDto } from "../../types/user";
import * as styles from "./HomePage.styles";

export const HomePage = () => {
    const [isNewPostModalOpen, setIsNewPostModalOpen] = useState<boolean>(false);

    const {
        data: users,
        isLoading,
        isError,
    } = useQuery<UserDto[]>({
        queryKey: ["users"],
        queryFn: async () => (await axios.get("http://localhost:8080/users")).data,
    });

    const queryClient = useQueryClient();
    const postUserMutation = useMutation({
        mutationFn: (newUser: { username: string, firstName: string, lastName: string, age: number }) =>
            axios.post<UserDto>(`http://localhost:8080/users`, newUser),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    const handleSave = (username: string, firstName: string, lastName: string, age: number) => {
        postUserMutation.reset();
        postUserMutation.mutate({
            username,
            firstName,
            lastName,
            age
        });

        setIsNewPostModalOpen(false)
    }

    return (
        <>
            <NewUserModal
                isOpen={isNewPostModalOpen}
                onSave={handleSave}
                onClose={() => setIsNewPostModalOpen(false)} />
            <Box sx={styles.container}>
                <Box sx={styles.guardzContainer}>
                    <Typography sx={{ fontSize: '4rem' }}>Guardz</Typography>
                    <Button sx={{}} onClick={() => setIsNewPostModalOpen(true)}>new user</Button>
                </Box>
                <Box sx={styles.usersListContainer}>
                    <UsersList users={users || []} isError={isError} isLoading={isLoading}></UsersList>
                </Box>
            </Box>
        </>
    );
}