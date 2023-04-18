
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'

interface Props {
    children: any
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header/>
            <Box
                sx={{ 
                    borderTop: "1px solid #ebebeb",
                    borderBottom: "1px solid #ebebeb"
                }}
            >
                {children}
            </Box>
            <Footer/>
        </>
    )
}
export default Layout;
