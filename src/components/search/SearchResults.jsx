import React, { useState } from 'react';

import UserDetails from '../user-details/UserDetails';

const SearchResults = queryResults => {
    const [userInfo, setUserInfo] = useState(false);

    if (queryResults.length === 0) {
        return <p>No results found.</p>;
    }

    const results = () => {
        return (
            <>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    {queryResults.queryResults.map((item, index) => (
                        <tbody key={index} >
                            <tr onClick={handleClick}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>    
                                <td>...</td>                                
                            </tr>
                        </tbody>
                    ))}
                </table>
            </>
        )
    }

    const handleClick = () => {
        setUserInfo(true);
    }

    return(
        <>
            {userInfo === true ? <UserDetails queryResults={queryResults} /> : results()}
        </>
    )
};

export default SearchResults;