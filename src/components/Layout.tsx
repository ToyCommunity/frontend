
import Nav from './Nav'
import { Box } from '@mui/material'

interface Props {
    children: any
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Nav/>
            <Box
                sx={{ 
                    borderTop: "1px solid #ebebeb"
                }}
            >
                {children}
            </Box>
        </>
    )
}
export default Layout;
