import React from 'react';
import Search from '../components/search/Search';
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