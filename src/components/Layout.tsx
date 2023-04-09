
import Nav from './Nav'

interface Props {
    children: any
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Nav/>
            <div>
                {children}
            </div>
        </>
    )
}
export default Layout;
