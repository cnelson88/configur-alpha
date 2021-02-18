import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import DefaultData from './DefaultData';

import { Input } from '../styles/input';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');    
    const [queryResults, setQueryResults] = useState<Array<string | number>>([]);

    useEffect(() => {
        setSearchQuery(searchQuery);              
    });

    useEffect(() => {
            if (searchQuery.length > 0) {
                const apiUrl = 'https://jsonplaceholder.typicode.com/users';
                
                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((response) => {
                        response.filter((value: any) => {
                            if(value.name.includes(searchQuery)) {
                                return setQueryResults([ ...queryResults, value ]);
                            } else if (value.username.includes(searchQuery)) {
                                return setQueryResults([ ...queryResults, value ]);
                            }
                        })    
                    });
            }
    }, [searchQuery]);

    const searchInput = () => {
        return (
            <>
                <Input
                    type='text'
                    placeholder='Please enter a name...'
                    value={searchQuery}
                    onChange={handleChange}
                    onFocus={clearInput}
                />       
            </>
        )
    };

    const handleChange = (e: any) => {
        const casing = e.target.value;
        const casingUpper = casing.charAt(0).toUpperCase() + casing.slice(1);

        setSearchQuery(casingUpper);
        setQueryResults([]);
    };

    const clearInput = () => {
        setSearchQuery('');
    }

    return (
        <>
            {searchInput()}
            {queryResults.length > 0 ? <SearchResults queryResults={queryResults} /> : <DefaultData />}
        </>
    );
};

export default Search;