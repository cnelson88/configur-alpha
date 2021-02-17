import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults';

import './search.scss';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');    
    const [queryResults, setQueryResults] = useState([]);

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
            <>
                <input
                    type='text'
                    placeholder='Please enter a name...'
                    value={searchQuery}
                    onChange={handleChange}
                />
            </>
        )
    };

    const handleChange = e => {
        const casing = e.target.value;
        const casingUpper = casing.charAt(0).toUpperCase() + casing.slice(1);

        setSearchQuery(casingUpper);
        setQueryResults([]);
    };

    return (
        <>
            {searchInput()}
            {queryResults.length > 0 ? <SearchResults queryResults={queryResults} /> : null}
        </>
    );
};

export default Search;