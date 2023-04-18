
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
    children: any
}

const Layout = ({children}: Props) => {
    const router = useRouter();
    if (router.route === '/signin' || router.route === '/signup') {
        return (
            <>
                <Box>
                    {children}
                </Box>
            </>
        )
    } else {
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
}
export default Layout;
