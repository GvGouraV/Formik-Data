import React , {Component} from "react";
import {Route,Redirect,Switch,Link} from "react-router-dom";
import CompHook from "./compHooks";
class MainComp extends Component{


    render(){   
       
        return(
        <div className="container">
            <h2>Display info</h2>
          
              <Link to={`/display/${1}`}>info</Link>
            
            <Switch>
                 <Route path="/display/:id" component={CompHook}/>
            </Switch>
             
        </div>)
    }
}
export default MainComp;