import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../Components/UserContext/Index';

const ProtectedRouter = (props: any): React.ReactElement | null => {
    const { user } = useContext(UserContext);

    if (user) return <Route {...props} />;

    return <Navigate to="/login"/>
};

export default ProtectedRouter;

