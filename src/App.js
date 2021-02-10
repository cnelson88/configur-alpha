import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import UserDetails from './pages/userdetails';

import './app.scss';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/userDetails' component={UserDetails} />
            </Switch>
        </div>
    );
}

export default App;
