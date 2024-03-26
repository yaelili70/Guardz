import { SxProps } from "@mui/material";

export const cardContainer: SxProps = {
    border: '1px solid #e0e0e0', // Border color
    borderRadius: '8px', // Border radius
    boxShadow: 'none', // Disable default shadow
    '&:hover': {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow on hover
    },
    m: '1rem',
    width: '20rem',
    minHeight: '6rem'
}

export const title: SxProps = {
    fontWeight: 'bold',
    fontSize: '1.2rem'
}