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
                        Go! <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
            
                
                </div>
                
                <div className='display-container'>
                    <h1>Coding Assignment 12</h1>
                    <p>This coding assignment played around with storybook to create reusable elements for potential websites. The elements created were simple elements understand the fundamentals. </p>
                    
                    
                    
                    <a 
                        href="https://aaaventura.github.io/code-assignment-12/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="go-button"
                    >
                        Go!  <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
            
                
                </div>
                
                
                <div className='display-container'>
                    <h1>Coding Assignment 13</h1>
                    <p>This assignment focuses on testing and validation. While there's little visuals to the font end, in the development, it displays my knowledge of validating and testing the components prior to pushing the commits to the repository. </p>
                    
                    
                    
                    <a 
                        href="https://aaaventura.github.io/code-assignment-13/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="go-button"
                    >
                        Go!  <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
            
                
                </div>
                
                
            </div>
            
            
            )

}

export default Portfolio



