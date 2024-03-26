import { SxProps } from "@mui/material";

export const container: SxProps = {
    display: 'flex', 
    height: 1
}

export const guardzContainer: SxProps = {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed'
}

export const usersListContainer: SxProps = {
    flexGrow: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-end', 
    mr: '5rem'
}