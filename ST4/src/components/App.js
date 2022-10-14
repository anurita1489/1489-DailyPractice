import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import{ Route, Switch} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
const App = () => {
    return(
        <div className="bgimage">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/aboutus" component={Aboutus}/>
                <Route exact path="/contactus" component={Contactus}/>
            </Switch>
        </div>
    );
};
export default App;