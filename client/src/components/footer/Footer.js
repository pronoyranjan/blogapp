import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
function Footer() {
    return (
      
    <footer>
 
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-12">
                        <div class="first">
                            <h4>My Skills</h4>
                            <p> React Js</p>
                            <p> Node Js</p>
                            <p> Mongo Db</p>
                            <p> express Js</p>
                            <p> C++</p>
                            <p> Docker and Kubernetes</p>
                        </div>
                    </div>
    
                    <div class="col-md-4 col-xs-12">
                        <div class="second">
                            <h4> Navigate</h4>
                            <ul>
                                <li><Link to="/">Home </Link></li>
                   
                                <li><Link to="/about">About</Link></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-md-4 col-xs-12">
                        <div class="third">
                            <h4> Contact</h4>
                            <ul>
                                <li>PRONOY RANJAN </li>
                                <li></li>
    
    
                              <li><i class="far fa-envelope"></i> pronoyranjansinister1234@gmail.com</li>
                                <li><i class="far fa-envelope"></i> email@yahoo.com</li>
    
    
                              <li><i class="fas fa-map-marker-alt"></i> NewDelhi | India</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="line"></div>
                        <div class="second2">
                            <a href="https://codepen.io/pronoyranjan/pen/poeMaWq?editors=0010" target="_blank"> <i class="fab fa-codepen fa-2x margin"></i></a>
                            <a href="https://github.com/pronoyranjan" target="_blank"> <i class="fab fa-github fa-2x margin"></i></a>
                            <a href="https://www.linkedin.com/in/pronoy-ranjan-2b57881aa/" target="_blank"> <i class="fab fa-linkedin fa-2x margin"></i></a>
                       
    
                        </div>
    
                    </div>
                </div>
                </div>
        </div>
       
    
        </footer>

    )
}

export default Footer
