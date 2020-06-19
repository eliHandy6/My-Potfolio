import React from "react";
import { Tabs, Tab, Grid, Cell ,Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";
class Projects extends React.Component {

    constructor(props) {

        super(props)

        this.state = { activeTab: 0 };

    }

    toggleCategories(){

        if(this.state.activeTab === 0){

                return(
                    <div className="projects-grid"><Card  shadow={5} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:"#fff",height:'176px'}}>
                        </CardTitle> 
                        <CardText>
                                This is Angular
                        </CardText>
                        <CardActions border>
                                <Button colored>Git Hub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu tstyle={{color:"black"}}>
                                <IconButton name="share"/>

                        </CardMenu>

                    </Card>
                        <Card  shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:"#fff",height:'176px'}}>
                            </CardTitle> 
                            <CardText>
                                    This is Angular
                            </CardText>
                            <CardActions border>
                                    <Button colored>Git Hub</Button>
                                    <Button colored>CodePen</Button>
                                    <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu tstyle={{color:"black"}}>
                                    <IconButton name="share"/>

                            </CardMenu>

                        </Card>

                        <Card  shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:"#fff",height:'176px'}}>
                            </CardTitle> 
                            <CardText>
                                    This is Angular
                            </CardText>
                            <CardActions border>
                                    <Button colored>Git Hub</Button>
                                    <Button colored>CodePen</Button>
                                    <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu tstyle={{color:"black"}}>
                                    <IconButton name="share"/>

                            </CardMenu>

                        </Card>


                        
                    </div>
        
                )
            
        }

        else if(this.state.activeTab === 1){
            return(
                <h1>Hello  Vue</h1>
            )
           
        }

        else if (this.state.activeTab === 2){
          

        }
        else if(this.state.activeTab === 3){
           

        }
        else if(this.state.activeTab === 4){
           
    
            
        }
        else if(this.state.activeTab === 5){

         

        }

    }

   
    render(){
        return(
            <div className="category-tabs">
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} >
            
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Java</Tab>
                    <Tab>MySql</Tab>
                </Tabs>
                

                
                <Grid >
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}

                        </div>

                    </Cell>

                </Grid>
                  

            </div>
        )
    }
}
export default Projects