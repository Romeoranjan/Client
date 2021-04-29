import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Education from './Education';
import Skill from './Skill';
import Assesment from './Assesment';
import Company from './Company';
import Personal from './Personal';





const App = () => <>
   <Router>
    <Header />
    
        <Switch>
        {/* HOME*/}
            <Route exact path="/" >
                <Banner />
                <About />
            </Route>
            {/* SIGNIN */}
            <Route path="/signin" >
                <Signin />
            </Route>
            {/* STUDENT ROUTE */}
            <Route path="/personal-info" >
                <Personal/>
            </Route>
            {/* SIGNUP ROUTES */}
            <Route  path="/signup">
                <Signup/>
            </Route>
            <Route path="/signup-education" >
                <Education/>
            </Route>
            <Route path="/signup-skills" >
                <Skill/>
            </Route>
            <Route path="/signup-assesments" >
                <Assesment/>
            </Route>
            {/* COMPANY ROUTES */}
            <Route path="/company" >
                <Company/>
            </Route>
            {/* DASHBOARD */}
            <Route path="/dashboard" >
                <Dashboard/>
            </Route>
        </Switch>
    

    <Footer />
    </Router>
</>

export default App;