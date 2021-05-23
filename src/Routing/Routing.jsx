import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NaVbar from "../components/Header/Navbar/Navbar"
import  Header from "../components/Header/Header";
import  Elements from "../pages/elements/elements"
import Blog from "../pages/Blog/blog"
import Home from "../pages/Home/Home"
import Shop from "../pages/shopo/shop"
import Features from "../pages/features/Features"
import Footer from "../components/Footer/Footer"

export default function Routing() {
    return(
        <Router>
        <Header />
        <NaVbar/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/Features">
               <Features/>
            </Route>
            <Route path="/Shop">
                <Shop/>
            </Route>
            <Route path="/Elements">
                <Elements/>
            </Route>
            <Route path="/Blog">
                <Blog/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
    )
}