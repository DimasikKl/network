import React from "react";
import {Navigate} from 'react-router-dom';
import { connect } from 'react-redux'
import { AppStateType } from "../../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
    fake: () => void
}

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType) {

    const RedirectComponent: React.FC<DispatchPropsType & MapPropsType> = (props) => {
        const {isAuth, fake, ...resProps} = props;

        if(!isAuth) return <Navigate to='/login'/>;

        return <WrappedComponent {...resProps as WCP}/>
    }
    const ConnectedAuthRedirectComponent = 
    connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {fake: () => {}})(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}

