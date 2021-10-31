import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <div className="d-flex">
            <Spinner animation="grow" variant="secondary" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: location }
                }}

            >

            </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;
