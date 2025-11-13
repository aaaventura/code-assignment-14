import './index.scss'
import Sidebar from '../Sidebar'
import AboutMe from '../AboutMe'
import Information from '../Information'
import Portfolio from '../Portfolio'

const Layout = () => {

    return (
            <div className="App">
                <Sidebar />
                <AboutMe />
                <Information />    
                <Portfolio />
            </div>
        )

}

export default Layout
