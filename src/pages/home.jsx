import React, { Fragment } from 'react';
import Search from '../components/search/search';

import Logo from '../images/logo.png';
import './home.scss';

const Home = () => {
    return (
        <div className='page-container'>
            <div>
                <img src={Logo} alt='' />
            </div>
            <Search />
        </div>
    )
}

export default Home;