import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import './search.scss';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');    
    const [queryResults, setQueryResults] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setSearchQuery(searchQuery);
    });

    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchQuery.length > 0) {
                const apiUrl = 'https://jsonplaceholder.typicode.com/users';
                
                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((response) => {
                        response.filter(value => {
                            if(value.name.includes(searchQuery)) {
                                return setQueryResults([...queryResults, value]);
                            }
                        })    
                    });
            }
        }, 400)

        
        return () => clearTimeout(delay);
    }, [searchQuery]);

    const searchInput = () => {
        return (
            <Fragment>
                <input
                    type='text'
                    placeholder='Please enter a name...'
                    value={searchQuery}
                    onChange={handleChange}
                    queryResults={queryResults}
                />
            </Fragment>
        )
    };

    const handleChange = e => {
        const casing = e.target.value;
        const casingUpper = casing.charAt(0).toUpperCase() + casing.slice(1);
        setSearchQuery(casingUpper);
    };

    const searchResults = () => {
        if (queryResults.length === 0) {
            return <p>No results found.</p>;
        }

        return(
            <Fragment>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {queryResults.map((item, index) => (
                        <tbody key={index} onClick={renderDetails}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>                                
                            </tr>
                        </tbody>
                    ))}
                </table>
            </Fragment>
        )
    };

    const renderDetails = (event) => {
        history.push({
            pathname: '/userDetails',
            state: { user: queryResults }
        });
    };

    return (
        <Fragment>
            {searchInput()}
            {searchResults()}
        </Fragment>
    );
};

export default Search;