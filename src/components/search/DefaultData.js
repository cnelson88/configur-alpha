import { useEffect, useState } from 'react';
import axios from 'axios'
import Paginate from 'react-paginate';

import { Table } from '../styles/table';
import { Pagination } from '../styles/pagination';

const DefaultData = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)

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
                            <tr key={key}>
                                <td>{pd.name}</td>
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

    const handlePageClick = e => {
        const selectedPage = e.selected;
        
        setOffset(selectedPage + 1)
    };

    return (
        <>
            {data}
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