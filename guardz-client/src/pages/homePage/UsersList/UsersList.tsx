import { Typography, Box, Alert } from "@mui/material";
import { User as UserDto } from "../../../types/user";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { User } from "../user/User";
import * as styles from "./UsersList.styles";

interface Props {
    isLoading: boolean;
    isError: boolean;
    users: UserDto[];
}

export const UsersList = ({ isLoading, isError, users }: Props) => {
    return (
        <>
            {isLoading ? (
                <Box sx={styles.loadingAndError}>
                    <CircularProgress />
                </Box>
            ) : isError ? (
                <Box sx={styles.loadingAndError}>
                    <Alert severity="error">
                        Could not fetch users, please try again later
                    </Alert>
                </Box>
            ) : !users || users.length === 0 ? (
                <Typography
                    sx={styles.noUsersText}
                >
                    No users yet, Make the first :)
                </Typography>
            ) : (
                <Box>
                    {users && users.map(({ username, firstName, lastName, age }: UserDto, index) => (
                        <User
                            key={index}
                            username={username}
                            firstName={firstName}
                            lastName={lastName}
                            age={age}
                        />
                    ))}
                </Box>
            )}
        </>
    );
}