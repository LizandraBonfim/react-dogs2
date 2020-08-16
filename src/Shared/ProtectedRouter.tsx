import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { UserContext } from '../Components/UserContext/Index';

const ProtectedRouter = (props: any): React.ReactElement | null => {
    const { usuario } = useContext(UserContext);

    if (usuario) return <Route {...props} />;

    return null;
};

export default ProtectedRouter;

