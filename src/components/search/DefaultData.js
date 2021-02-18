import { useEffect, useState } from 'react';
import axios from 'axios'
import Paginate from 'react-paginate';
import SearchResults from './SearchResults';

import { Table } from '../styles/table';
import { Pagination } from '../styles/pagination';

const DefaultData = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    const [searchQuery, setSearchQuery] = useState('');    
    const [queryResults, setQueryResults] = useState([]);

    const getData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = res.data;  
        const slice = data.slice(offset, offset + perPage);
        const postData = 
                    <Table className='table table__default'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        {slice.map((pd, key) => 
                        <tbody>
                            <tr key={key} onClick={handleClick}>
                                <td className='row-click'>{pd.name}</td>
                                <td>{pd.username}</td>
                                <td>{pd.email}</td>
                                <td>{pd.phone}</td>
                                <td>{pd.website}</td>
                            </tr>
                        </tbody>)}
                    </Table>
            
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))
    }

    useEffect(() => {
        getData()
    }, [offset])

    useEffect(() => {
        if (searchQuery.length > 0) {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            
            fetch(apiUrl)
                .then((response) => response.json())
                .then((response) => {
                    response.filter(value => {
                        if(value.name.includes(searchQuery)) {
                            return setQueryResults([ ...queryResults, value ]);
                        } 
                    })    
                });
        }
    }, [searchQuery]);

    const handlePageClick = e => {
        const selectedPage = e.selected;
        
        setOffset(selectedPage + 1)
    };

    const handleClick = e => {
        const selectedRow = e.target.innerHTML;

        setSearchQuery(selectedRow);
    }

    return (
        <>
            {queryResults.length > 0 ? <SearchResults queryResults={queryResults} /> : data}
            <Pagination>
                <Paginate 
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}          
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </Pagination>
        </>
    )
};

export default DefaultData;