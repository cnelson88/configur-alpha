import React, { useState } from 'react';
import UserDetails from '../user-details/UserDetails';
import { Table } from '../styles/table';

const SearchResults = (queryResults: any) => {
    const [userInfo, setUserInfo] = useState<Boolean>(false);

    if (queryResults.length === 0) {
        return <p>No results found.</p>;
    }

    const results = () => {
        return (
            <>
                <Table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    {queryResults.queryResults.map((item: any, index: any) => (
                        <tbody key={index} >
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>    
                                <td>{item.phone}</td>
                                <td>{item.website}</td>  
                                <td className='row-click' onClick={handleClick}>...</td>                                
                            </tr>
                        </tbody>
                    ))}
                </Table>
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