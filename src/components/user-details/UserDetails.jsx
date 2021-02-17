import React from 'react';

import './userdetails.scss';

const UserDetails = queryResults => {
    const userDetails = queryResults.queryResults;

    const userinfo = () => {
        return (
            <>
                <div className='user-container'>
                    <div className='user-container user-info-header'>
                        <h1>{userDetails.queryResults[0].name}</h1>
                        <h3>Contact number: {userDetails.queryResults[0].phone}</h3>
                        <div>---------</div>
                        <h3>Email: {userDetails.queryResults[0].email}</h3>
                        <h3>Website: {userDetails.queryResults[0].website}</h3>
                    </div>
                    <div className='user-container-info'>
                        <div className='user-container info'>
                            <h3>Address</h3>
                            <p><b>Suite:</b> {userDetails.queryResults[0].address.suite}</p>
                            <p><b>Street:</b> {userDetails.queryResults[0].address.street}</p>
                            <p><b>City:</b> {userDetails.queryResults[0].address.city}</p>
                            <p><b>Zipcode:</b> {userDetails.queryResults[0].address.zipcode}</p>
                        </div>
                        <div className='user-container info'>
                            <h3>Company</h3>
                            <p><b>Name:</b> {userDetails.queryResults[0].company.name}</p>
                            <p><b>BS:</b> {userDetails.queryResults[0].company.bs}</p>
                            <p><b>Catch Phrase:</b> {userDetails.queryResults[0].company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {userinfo()}
        </>
    )
}

export default UserDetails;