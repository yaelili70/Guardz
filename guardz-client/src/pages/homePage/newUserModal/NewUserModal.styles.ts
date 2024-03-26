import { SxProps } from "@mui/material";

export const modal: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    p: '1rem',
    width: '30%',
    borderRadius: '1%'
}

export const createUserButton: SxProps = { textAlign: 'center', fontSize: '1.5rem' };

export const form: SxProps = {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}