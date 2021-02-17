import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import UserDetails from './components/user-details/UserDetails';

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
