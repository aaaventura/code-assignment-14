import './index.scss'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>   
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
       
            <NavLink exact="true" activeclassname="active" className="about-link" to="https://github.com/aaaventura">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
       
            <NavLink exact="true" activeclassname="active" className="contact-link" to="https://www.linkedin.com/in/ahleeryan-joe-ventura-209a49398/">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>

)


export default Sidebar
