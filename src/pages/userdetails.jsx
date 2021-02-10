import React, { Fragment } from 'react';

import './userdetails.scss';

const UserDetails = queryResults => {
    const userDetails = queryResults.location.state.user[0];

    console.log(userDetails);

    const userinfo = () => {

        return (
            <Fragment>
                <div className='user-container'>
                    <div className='user-container user-info-header'>
                        <h1>{userDetails.name}</h1>
                        <h3>Contact number: {userDetails.phone}</h3>
                        <h3>Email: {userDetails.email}</h3>
                        <h3>Website: {userDetails.website}</h3>
                    </div>
                    <div className='user-container address'>
                        <h3>Address</h3>
                        <p>Suite: {userDetails.address.suite}</p>
                        <p>Street: {userDetails.address.street}</p>
                        <p>City: {userDetails.address.city}</p>
                        <p>Zipcode: {userDetails.address.zipcode}</p>
                    </div>
                    <div className='user-container address'>
                        <h3>Company</h3>
                        <p>Name: {userDetails.company.name}</p>
                        <p>BS: {userDetails.company.bs}</p>
                        <p>Catch Phrase: {userDetails.company.catchPhrase}</p>
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