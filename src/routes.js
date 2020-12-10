import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-routeer-dom';
import Login from './Login';

const Login = lazy(() => import('./view/login/Login'));

const Routes = () => {
    <Router>
        <Suspense fallback = {<div></div>}>
            <Switch>
                <Route path="/login" component={} />
                <Route path="/" component={Login}/>
            </Switch>
        </Suspense>
    </Router>
}

export default Routes;