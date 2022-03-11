
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from './pages/Admin';
import {ToastContainer} from 'react-toastify';
import AdminNews from "./components/AdminNews";
import AdminMenus from "./components/AdminMenus";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import CategoryPage from "./pages/CategoryPage";
import Information from "./pages/Information";
import {connect} from 'react-redux';
import {RingLoader} from 'react-spinners';

function App(props) {
  return (
    <div>
        <BrowserRouter>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/category/:url' component={CategoryPage}/>
                <Route exact path='/category/:url/news/:newsUrl' component={Information}/>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/admin' component={Admin}/>
                <PrivateRoute exact path='/admin/news' component={AdminNews}/>
                <PrivateRoute exact path='/admin/menus' component={AdminMenus}/>


                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
        <ToastContainer/>


        {/*{props.pageLoading ?*/}
        {/*    <div className="page-loader">*/}
        {/*        <RingLoader*/}
        {/*            loading={props.pageLoading}*/}
        {/*            color="#008F48"*/}
        {/*        />*/}
        {/*    </div> : ""*/}
        {/*}*/}

    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        pageLoading: state.app.pageLoading
    }
}

export default connect(mapStateToProps, {})(App);
