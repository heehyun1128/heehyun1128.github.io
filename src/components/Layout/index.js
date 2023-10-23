import { Outlet } from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar'

const Layout = () => {
    return (<div className='App'>
        <Sidebar />
        <div className='page'>
            {/* <span className="tags top-tags">Late Discovered Sofeware Development Lover</span> */}

            <Outlet />
            <span className="tags bottom-tags">
                Yi Chen @ 2023
                <br />
                <span className="bottom-tag-html"></span>
            </span>
        </div>
    </div>
    )
}

export default Layout