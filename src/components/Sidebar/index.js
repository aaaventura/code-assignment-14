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
       
            <a 
                href="https://github.com/aaaventura" 
                className="about-link" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </a>
       
            <a 
                href="https://www.linkedin.com/in/ahleeryan-joe-ventura-209a49398/" 
                className="contact-link" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </a>
        </nav>
    </div>

)


export default Sidebar
