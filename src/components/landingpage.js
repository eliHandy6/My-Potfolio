import React,{Component} from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:"auto"}}>

                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="./passpot.jpg" alt="passpor"
                         className="avatar-img"
            
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Bootstrap| Java |Spring Boot|React |JavaScript |MongoDB |MySQL</p>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/zack-ogoma-1460171a3/s"  rel="noopener noreferrer" target="_blank">
                             <i class="fa fa-linkedin-square" arial-hidden="true"/>
                            </a>



                            <a href="https://github.com/eliHandy6?tab=repositories"  rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" arial-hidden="true"/>
                             </a>

                             <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-free-code-camp" arial-hidden="true"/>
                             </a>

                             <a href="https://www.youtube.com/"  rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-youtube-square" arial-hidden="true"/>
                             </a>
                            
                        </div>

                    </Cell>

                </Grid>
              
            </div>
        )
    }
}
export default LandingPage
