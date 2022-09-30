import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from './redux/app-reducer';
import { withRouter } from "./components/hoc/withRouter";
import { compose } from "redux";
import Preloader from "./assets/image/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import store from "./redux/redux-store";
import { withSuspense } from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={withSuspense(DialogsContainer)} />
                        <Route path='/Profile' element={withSuspense(ProfileContainer)}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
}) 

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainApp = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;