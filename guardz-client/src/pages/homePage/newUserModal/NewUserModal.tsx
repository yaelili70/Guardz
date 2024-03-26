import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as styles from './NewUserModal.styles';

interface Props {
    isOpen: boolean,
    onClose: () => void;
    onSave: (username: string, firstName: string, lastName: string, age: number) => void;
}

interface FormValues {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
}

export const NewUserModal = ({ isOpen, onClose, onSave }: Props) => {
    const initialValues: FormValues = {
        username: '',
        firstName: '',
        lastName: '',
        age: 0
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer')
    });

    const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        console.log(values);
        resetForm();
        onSave(values.username, values.firstName, values.lastName, values.age);
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={styles.modal}>
                <Typography sx={styles.createUserButton}>Create User</Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Box sx={styles.form}>
                            <Field name="username">
                                {({ field }) => (
                                    <div>
                                        <TextField
                                            {...field}
                                            label="Username"
                                            fullWidth
                                        />
                                        <ErrorMessage name="username" component="div" />
                                    </div>
                                )}
                            </Field>
                            <Field name="firstName">
                                {({ field }) => (
                                    <div>
                                        <TextField
                                            {...field}
                                            label="First Name"
                                            fullWidth
                                        />
                                        <ErrorMessage name="firstName" component="div" />
                                    </div>
                                )}
                            </Field>
                            <Field name="lastName">
                                {({ field }) => (
                                    <div>
                                        <TextField
                                            {...field}
                                            label="Last Name"
                                            fullWidth
                                        />
                                        <ErrorMessage name="lastName" component="div" />
                                    </div>
                                )}
                            </Field>
                            <Field name="age">
                                {({ field }) => (
                                    <div>
                                        <TextField
                                            {...field}
                                            label="Age"
                                            type="number"
                                            fullWidth
                                        />
                                        <ErrorMessage name="age" component="div" />
                                    </div>
                                )}
                            </Field>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </Box>
        </Modal>
    );
};
