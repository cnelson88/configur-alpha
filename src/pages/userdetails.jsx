import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import './userdetails.scss';

const UserDetails = queryResults => {
    const userDetails = queryResults.location.state.user[0];
    const history = useHistory();

    const goHome = (event) => {
        history.push({
            pathname: '/',
        });
    };

    const userinfo = () => {

        return (
            <Fragment>
                <div className='home' onClick={goHome}>{`< Back`}</div>
                <div className='user-container'>
                    <div className='user-container user-info-header'>
                        <h1>{userDetails.name}</h1>
                        <h3>Contact number: {userDetails.phone}</h3>
                        <div>---------</div>
                        <h3>Email: {userDetails.email}</h3>
                        <h3>Website: {userDetails.website}</h3>
                    </div>
                    <div className='user-container-info'>
                        <div className='user-container info'>
                            <h3>Address</h3>
                            <p><b>Suite:</b> {userDetails.address.suite}</p>
                            <p><b>Street:</b> {userDetails.address.street}</p>
                            <p><b>City:</b> {userDetails.address.city}</p>
                            <p><b>Zipcode:</b> {userDetails.address.zipcode}</p>
                        </div>
                        <div className='user-container info'>
                            <h3>Company</h3>
                            <p><b>Name:</b> {userDetails.company.name}</p>
                            <p><b>BS:</b> {userDetails.company.bs}</p>
                            <p><b>Catch Phrase:</b> {userDetails.company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {userinfo()}
        </Fragment>
    )
}

export default UserDetails;