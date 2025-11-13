import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const Portfolio = () => {

    return (
            
            <div className='portfolio-container'>
                <div className='display-container'>
                    <h1>Coding Assignment 11</h1>
                    <p>This coding assignment was the introduction to development environments. It required me to build and modify my first Dockerfile configuration and container.</p>
                    
                    
                    
                    <a 
                        href="https://aaaventura.github.io/code-assignment-11/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="go-button"
                    >
                        go to Portfolio <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
            
                
                </div>
            </div>
            
            
            )

}

export default Portfolio



