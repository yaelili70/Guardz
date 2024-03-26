import { Card, CardContent, Typography } from "@mui/material";
import * as styles from './User.styles';

interface Props {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
}

export const User = (props: Props) => {
    const { username, firstName, lastName, age } = props

    return (
        <Card sx={styles.cardContainer}>
            <CardContent>
                <Typography sx={styles.title}>{username}</Typography>
                <Typography sx={styles.text}>{firstName} {lastName}</Typography>
                <Typography sx={styles.text}>{age}</Typography>
            </CardContent>
        </Card>
    );
};
